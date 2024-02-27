import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const EditarLocal = () => {
    const { id } = useParams()
    const [conteudoPreencher, setConteudoPreencher] = useState([])
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            console.log(form)
            const {response} = await axios.patch(`http://localhost:8080/local/${id}`, form).catch(function (error) {
                if (error.response) {
                  window.alert(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
            });

            console.log(response)
            
            if (response === undefined) {
                alert('editado')
              }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro' + err)
        }

        finally {
        setLoading(false)
        }
      };

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo(`http://localhost:8080/local/${id}`).then((data) => setConteudoPreencher(data))
        setForm(conteudoPreencher)
    }, [])
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <select className={styles.comboBox} onChange={HandleOnChange} name="status" id="status">
                    <option value="Disponivel">Selecione</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a sala</h3>
                <Input 
                    name='sala' 
                    type="string" 
                    placeholder={conteudoPreencher.sala}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o setor</h3>
                <Input 
                    name='setor' 
                    type="string" 
                    placeholder={conteudoPreencher.setor}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                <Input 
                    name='data_hora_fim' 
                    type="date" 
                    required 
                    placeholder={conteudoPreencher.data_hora_fim}
                    onChange={HandleOnChange} />
            </div>
            
            <button 
                type="submit"
                onClick={onLogin}
                className={styles.submit}
                text='Entrar'
                >Salvar
            </button>
        </form>
    )
}

export default EditarLocal
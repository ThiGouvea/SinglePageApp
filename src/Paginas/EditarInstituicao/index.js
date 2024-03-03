import Input from "Componentes/Input"
import styles from "./CadastrarInstituicao.module.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import Cidades from "assets/json/estados-cidades2.json"
import Select from "react-select";


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const EditarInstituicao = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [conteudoPreencher, setConteudoPreencher] = useState([])
    const cidade = Cidades

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }

      useEffect(() => {
        getConteudo(`http://localhost:8080/instituicao/${id}`).then((data) => setConteudoPreencher(data))
        setForm(conteudoPreencher)
    }, [])
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.cidade_id = parseInt(form.cidade_id)
            console.log(form)
            const {response} = await axios.patch(`http://localhost:8080/instituicao/${id}`, form).catch(function (error) {
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

    const HandleOnSelect = (event) => {
        setForm({...form, [event.name]: event.value})
    }

    const options = cidade.map((option) => 
    <option key={option.id} value={option.id}>{option.name}</option>
    );
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <select className={styles.comboBox} onChange={HandleOnChange} name="status" id="status">
                    <option value="">Selecione</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o nome da instituição</h3>
                <Input 
                    name='nome' 
                    type="string" 
                    placeholder={conteudoPreencher.nome}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a sigla da instituição</h3>
                <Input 
                    name='sigla' 
                    type="string" 
                    placeholder={conteudoPreencher.sigla}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o CNPJ da instituição</h3>
                <Input 
                    name='cnpj' 
                    type="string" 
                    placeholder={conteudoPreencher.cnpj}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o endereço da instituição</h3>
                <Input 
                    name='endereco' 
                    type="string" 
                    placeholder={conteudoPreencher.endereco}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o telefone</h3>
                <Input 
                    name='telefone' 
                    type="number" 
                    placeholder={conteudoPreencher.telefone}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o email da instituição</h3>
                <Input 
                    name='email' 
                    type="email" 
                    placeholder={conteudoPreencher.email}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione uma Cidade</h3>
                <select
                    className={styles.comboBox}
                    name='cidade_id'
                    type='number'
                    onChange={HandleOnSelect}
                    required>
                        {options}
                    </select>
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

export default EditarInstituicao
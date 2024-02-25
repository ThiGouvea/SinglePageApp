import Input from "Componentes/Input"
import styles from "./CadastrarEventos.module.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import Select from 'react-select'


const api = axios.create({
  baseURL: 'http://localhost:8080'
});


const EditarEvento = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [conteudoPreencher, setConteudoPreencher] = useState([])
    const [local, setLocal] = useState([])

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }
    
      useEffect(() => {
        getConteudo("http://localhost:8080/local/").then((data) => setLocal(data))
        getConteudo(`http://localhost:8080/evento/${id}`).then((data) => setConteudoPreencher(data))
        
    }, [])
    
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.local_id = parseInt(form.local_id);


            console.log(form)
            const {response} = await axios.patch(`http://localhost:8080/evento/${id}`, form).catch(function (error) {
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
            console.log(response.data)
            
            if (response === true) {
              alert('evento cadastrado')
              navigate('/eventos')
            }
        }

        catch (err) {
            console.log("err")
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
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <select className={styles.comboBox} onChange={HandleOnChange} defaultValue={"ativo"} name="status" id="status">
                    <option value="">Selecione</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o nome do evento</h3>
                <Input 
                    name='nome' 
                    placeholder={conteudoPreencher.nome}
                    type="string" 
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a descrição do evento</h3>
                <Input 
                    name='descricao' 
                    type="string" 
                    placeholder={conteudoPreencher.descricao}
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de inicio</h3>
                    <Input 
                        name='data_inicio' 
                        type="date" 
                        placeholder={conteudoPreencher.data_inicio}
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                    <Input 
                        name='data_final' 
                        type="date" 
                        placeholder={conteudoPreencher.data_final}
                        onChange={HandleOnChange} />
                </div>
            </div>



            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione uma Sala</h3>
                <Select
                    name='local_id'
                    placeholder={conteudoPreencher.local_id}
                    type='number'
                    options={local}
                    value={local.ID}
                    onChange={HandleOnSelect}
                    getOptionLabel={(local) => `sala ${local.sala}, ${local.setor}` }
                    getOptionValue={(local) => local.ID}
                />
            </div>

            
            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='horaInicio' 
                        type="time" 
                        placeholder={conteudoPreencher.horaInicio}
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='horaFim' 
                        type="time" 
                        placeholder={conteudoPreencher.horaFim}
                        onChange={HandleOnChange} />
                </div>
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

export default EditarEvento
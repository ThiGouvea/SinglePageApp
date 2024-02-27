import Input from "Componentes/Input"
import styles from "./CadastrarEventos.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import Select from 'react-select'


const api = axios.create({
  baseURL: 'http://localhost:8080'
});


const CadastrarEventos = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [local, setLocal] = useState([])

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }
    
      useEffect(() => {
        getConteudo("http://localhost:8080/local/").then((data) => setLocal(data))
        
    }, [])
    
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.local_id = parseInt(form.local_id);
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);

            console.log(form)
            const {response} = await axios.post('http://localhost:8080/evento/', form).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  window.alert(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser 
                  // and an instance of http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            });
            console.log(response.data)
            
            if (response === undefined) {
                alert('cadastrado')
              }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro' + err)
        }

        finally {
        setLoading(false)
        }
      };

    const optionsLocais = local.map((option) => 
      <option key={option.ID} value={option.ID}>{`sala ${option.sala}, ${option.setor}`}</option>
  );

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
                    type="string" 
                    required 
                    placeholder="Nome do evento"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a descrição do evento</h3>
                <Input 
                    name='descricao' 
                    type="string" 
                    required 
                    placeholder="Descrição do evento"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de inicio</h3>
                    <Input 
                        name='data_inicio' 
                        type="date" 
                        required 
                        placeholder="data inicio"
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                    <Input 
                        name='data_final' 
                        type="date" 
                        required 
                        placeholder="Termino evento"
                        onChange={HandleOnChange} />
                </div>
            </div>

            <div className={styles.options}>
            <h3 className={styles.nomesOptions} >Selecione uma Sala</h3>
                <select
                    name='local_id'
                    className={styles.comboBox}
                    type='number'
                    onChange={HandleOnChange}
                    required>
                        {optionsLocais}
                </select>
            </div>

            
            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='horaInicio' 
                        type="time" 
                        required 
                        placeholder="Insira o nome do evento"
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='horaFim' 
                        type="time" 
                        required 
                        placeholder="Insira o nome do evento"
                        onChange={HandleOnChange} />
                </div>
            </div>
            
            <button 
                type="submit"
                onClick={onLogin}
                className={styles.submit}
                text='Entrar'
                >Cadastrar
            </button>
        </form>
    )
}

export default CadastrarEventos
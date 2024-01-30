import Input from "Componentes/Input"
import styles from "./CadastrarEventos.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarEventos = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);
            const {response} = await axios.post('http://localhost:8080/login', form)

            console.log(response)
            
            if (response === true) {
              alert('evento cadastrado')
              navigate('/eventos')
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
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <select className={styles.comboBox} name="status" id="status">
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
                        name='DataInicio' 
                        type="date" 
                        required 
                        placeholder="data inicio"
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                    <Input 
                        name='DataFinal' 
                        type="date" 
                        required 
                        placeholder="Termino evento"
                        onChange={HandleOnChange} />
                </div>
            </div>
            
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >ID local do evento</h3>
                <Input 
                    name='LocalID' 
                    type="number" 
                    required 
                    placeholder="Local do evento"
                    onChange={HandleOnChange} />
            </div>
            
            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='HoraInicio' 
                        type="time" 
                        required 
                        placeholder="Insira o nome do evento"
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='HoraFim' 
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
import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarAtividade = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.evento_id = parseInt(form.evento_id)
            form.usuario_id = parseInt(form.usuario_id)
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);
            const {response} = await axios.post('http://localhost:8080/inscricaoEmEventos/', form)

            console.log(response)
            
            if ( response === true ) {
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
                    <h3 className={styles.nomesOptions} >Insira a data</h3>
                    <Input 
                        name='data' 
                        type="datetime-local" 
                        required 
                        placeholder="Data atividade"
                        onChange={HandleOnChange} />
            </div>

            
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a Hora</h3>
                <Input 
                    name='hora' 
                    type="datetime-local" 
                    required 
                    placeholder="Insira a hora de inicio"
                    onChange={HandleOnChange} />
            </div>


            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Evento ID //todo</h3>
                <Input 
                    name='evento_id' 
                    type="number" 
                    required 
                    placeholder="ID do evento"
                    onChange={HandleOnChange} />
            </div>     

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Usuario ID //todo</h3>
                <Input 
                    name='usuario_id' 
                    type="number" 
                    required 
                    placeholder="ID do usuario"
                    onChange={HandleOnChange} />
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

export default CadastrarAtividade
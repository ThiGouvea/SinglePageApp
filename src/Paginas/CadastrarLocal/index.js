import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';

// TODO


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarLocal = () => {
    
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navegar = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            setForm({...form, ["status"]: "ativo"})
            console.log(form)
            const {response} = await axios.post('http://localhost:8080/local/', form).catch(function (error) {
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

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a sala</h3>
                <Input 
                    name='sala' 
                    type="string" 
                    required 
                    placeholder="sala"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o setor</h3>
                <Input 
                    name='setor' 
                    type="string" 
                    required 
                    placeholder="Digite o setor"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                <Input 
                    name='data_hora_fim' 
                    type="date" 
                    required 
                    placeholder="Termino evento"
                    onChange={HandleOnChange} />
            </div>
            
            <div className={styles.optionsDupla}>
                <button 
                    type="submit"
                    onClick={onLogin}
                    className={styles.submit}
                    text='Entrar'
                    >Cadastrar
                </button>
                <button 
                    type="submit"
                    onClick={() => navegar(-1)}
                    className={styles.submit}
                    text='Entrar'
                    >Voltar
                </button>
            </div>
        </form>
    )
}

export default CadastrarLocal
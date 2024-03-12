import Input from "Componentes/Input"
import styles from "./Login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Login = () => {
    const [loading, setLoading] = useState()
    const [resposta, setResposta] = useState([])
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [isAuthenticated, setisAuthenticated] = useState([false])
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post('http://localhost:8080/login', form).catch(function (error) {
                if (error.response) {
                  alert(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
        
                  console.log(error.request);
                } else {
        
                  console.log('Error', error.message);
                }
            })

            console.log(response.data)
            
            if (response.data.data === "Voce está conectado") {
              setisAuthenticated(true)
              localStorage.setItem('isAuthenticated', true);
              localStorage.removeItem('adm')
              localStorage.setItem('idUsuario', response.data.usuario_id)
              navigate('/eventos')
              window.location.reload()
            }
            setLoading(false)
          }
          catch (err) {
            console.log('Algo deu errado com o Login' + err)
          }
          
      };

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <form className={styles.login}>
          <h3 className={styles.nomesOptions} >Email</h3>
            <Input 
                name='email' 
                type="email" 
                required 
                placeholder={"Insira seu email"} 
                onChange={HandleOnChange} />

            <h3 className={styles.nomesOptions} >Senha</h3>
            <Input Cadastrar
                name='senha' 
                type="password" 
                required 
                placeholder="Insira a senha"
                onChange={HandleOnChange} />

            <div className={styles.optionsDupla}>
              <button 
                  type="submit"
                  onClick={onLogin}
                  className={styles.submit}
                  text='Entrar'
                  >Entrar
              </button>
              <button 
                  type="submit"
                  onClick={() => navigate("/criar_conta")}
                  className={styles.submit}
                  text='Entrar'
                  >Criar conta
              </button>
            </div>
        </form>
    )
}

export default Login



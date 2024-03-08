import Input from "Componentes/Input"
import styles from "./Login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const LoginADM = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [isAuthenticated, setisAuthenticated] = useState([false])
    const [usuario, setUsuario] = useState([])

    async function getConteudo(links) {
      const url = links;
      let response = await axios.get(url);
      return response.data;
    }
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            console.log(form)
            const response = await axios.post('http://localhost:8080/login', form).catch(function (error) {
                if (error.response) {
                  window.alert(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
        
                  console.log(error.request);
                } else {
        
                  console.log('Error', error.message);
                }
            })
            
            if (response.data.data === "Voce está conectado") {
              console.log(response.data.tipo_usuario)
              if (response.data.tipo_usuario == 1) {
                alert('usuário logado com sucesso')
                setisAuthenticated(true)
                localStorage.setItem('adm', true)
                localStorage.setItem('isAuthenticated', true)
                navigate("/")
                window.location.reload()
              } else if (response.data.tipo_usuario == 2) {
                alert('esta é não é uma conta de administrador de eventos, por favor conecte-se com uma conta de administrador')
              }    
            }
            setLoading(false)
          }
          catch (err) {
            alert('Algo deu errado com o Login' + err)
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
            </div>
        </form>
    )
}

export default LoginADM
import Input from "Componentes/Input"
import styles from "./Login.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import UserService from 'Services/UserService'


const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await UserService.login(form)
            console.log('response do Login', response)
            if (response === true) {
              alert('usuário Logado com Sucesso')
              navigate('/eventos')
            }
            setLoading(false)
          }
          catch (err) {
            alert('Algo deu errado com o Login' + err)
          }


        console.log("Usuário:", form);
      };

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    return (
        <form className={styles.login}>
            <Input 
                name='email' 
                type="email" 
                required 
                placeholder={"Insira seu email"} 
                onChange={HandleOnChange} />

            <Input 
                name='password' 
                type="password" 
                required 
                placeholder="Insira a senha"
                onChange={HandleOnChange} />

            <button 
                type="submit"
                onClick={onLogin}
                className={styles.submit}
                text='Entrar'
                >Entrar
            </button>
        </form>
    )
}

export default Login
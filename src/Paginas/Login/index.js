import Input from "Componentes/Input"
import styles from "./Login.module.css"
import { useState } from "react";



const Login = () => {
    const [form, setForm] = useState([])
    
    const onLogin = async (event) => {
        event.preventDefault();
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
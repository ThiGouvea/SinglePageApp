import Input from "Componentes/Input"
import styles from "./Login.module.css"



const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const onLogin = () => {
        console.log("Usuário:", username);
        console.log("Senha:", password);
      };
    return (
        <form>
            <Input type="text" required placeholder={"Insira seu nome"} />
            <Input type="password" required placeholder="Insira a senha" />
            <button type="submit" onSubmit={onLogin} className={styles.submit}>Entrar</button>
        </form>
    )
}

export default Login
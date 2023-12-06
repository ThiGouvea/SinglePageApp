import Input from "Componentes/Input"
import styles from "./Login.module.css"

const Login = () => {
    return (
        <form>
            <Input type="text" required placeholder={"Insira seu nome"} />
            <Input type="password" required placeholder="Insira a senha" />
            <button type="submit" className={styles.submit}>Entrar</button>
        </form>
    )
}

export default Login
import BotaoPrincipal from "Componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import { useNavigate } from "react-router-dom"

const PaginaInicial = () => {

    const navegar = useNavigate()

    return (
        <>
            <div>

                <h1>Descubra, Participe, conecte-se</h1>
                <h2>Encontre os eventos mais relevantes da sua área</h2>
            </div>
        </>
    )
}

export default PaginaInicial
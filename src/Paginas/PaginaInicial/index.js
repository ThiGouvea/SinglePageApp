import BotaoPrincipal from "Componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import { useNavigate } from "react-router-dom"
import inicial from "assets/paginaInicial.png"


const PaginaInicial = () => {

    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <h2>Encontre os eventos mais relevantes da sua área</h2>
                <img 
                    className={styles.imagemCachorro}
                    src={inicial}
                    alt="cachorro de oculos vestido como humano"
                />
            </div>
        </>
    )
}

export default PaginaInicial
import { Link } from "react-router-dom"
import styles from "./Post.module.css"
import BotaoPrincipal from "Componentes/BotaoPrincipal"

const ListaLinkItem = ({local, textoLink}) => {
    return (
        <Link to={`${local.caminho}`}>
            <div className={styles.post}>
                <h2 className={styles.titulo}>
                    {local.titulo}
                </h2>
                <BotaoPrincipal>{textoLink}</BotaoPrincipal>
            </div>
        </Link>
    )
}

export default ListaLinkItem
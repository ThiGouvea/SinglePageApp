import styles from "./BotaoPrincipal.module.css"
import { useNavigate } from "react-router-dom";

const BotaoEditar = ({children, tamanho, destino, IDDestino}) => {
    const navigate = useNavigate()
    const apertado = (lugar) => {navigate(lugar)}
    return (
        <button className={`
            ${styles.botaoPrincipal}
            ${styles[tamanho]}`}
            onClick={() => apertado(`${destino}${IDDestino}`)}
            >
            {children}
        </button>
    )
}

export default BotaoEditar
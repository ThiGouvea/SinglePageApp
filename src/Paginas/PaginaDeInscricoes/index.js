import styles from "./Inicio.module.css";
import cadastros from "assets/json/linksInscricoes.json"
import ListaLinkItem from "Componentes/ListaLinkItem";


const Inscricoes = () => {
    return (
        <ul className={styles.posts}>
            {cadastros.map(cadastros => (
                <li key={cadastros.id}>
                    <ListaLinkItem local={cadastros} textoLink={"Inscrever-se"}/>
                </li>
            ))}
        </ul>
    )
}

export default Inscricoes
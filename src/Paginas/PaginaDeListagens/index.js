import styles from "./Inicio.module.css";
import listagens from "assets/json/linksListar.json"
import ListaLinkItem from "Componentes/ListaLinkItem";


const Listagens = () => {
    return (
        <ul className={styles.posts}>
            {listagens.map(listagens => (
                <li key={listagens.id}>
                    <ListaLinkItem local={listagens} textoLink={"Listar"}/>
                </li>
            ))}
        </ul>
    )
}

export default Listagens
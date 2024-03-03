import styles from "./Inicio.module.css";
import cadastros from "assets/json/linksCadastros.json"
import ListaLinkItem from "Componentes/ListaLinkItem";


const Cadastros = () => {
    return (
        <ul className={styles.posts}>
            {cadastros.map(cadastros => (
                <li key={cadastros.id}>
                    <ListaLinkItem local={cadastros} textoLink={"Cadastrar"}/>
                </li>
            ))}
        </ul>
    )
}

export default Cadastros
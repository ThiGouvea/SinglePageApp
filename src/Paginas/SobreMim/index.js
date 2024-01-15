import styles from "./SobreMim.module.css"
import PostModelo from "Componentes/PostModelo"

const SobreMim = () => {
    return (
        <PostModelo
            titulo="Sobre mim..."
        >
            <h3 className={styles.subtitulo}>
                Ola eu sou o Thiago
            </h3>

            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
            <p className={styles.paragrafo}>paragrafo</p>
        </PostModelo>
    )
}

export default SobreMim
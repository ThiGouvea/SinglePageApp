import styles from "./SobreMim.module.css"
import PostModelo from "Componentes/PostModelo"

const SobreMim = () => {
    return (
        <PostModelo
            titulo="Algo"
        >
            <h3 className={styles.subtitulo}>
                Algo
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
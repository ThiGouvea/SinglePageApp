import styles from "./SobreMim.module.css"
import PostModelo from "Componentes/PostModelo"
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim..."
        >
            <h3 className={styles.subtitulo}>
                Ola eu sou o Thiago
            </h3>

            <img 
                src={fotoSobreMim}
                alt="foto sorrindo"
                className={styles.fotoSobreMim} />

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
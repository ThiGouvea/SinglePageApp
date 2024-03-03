import BotaoPrincipal from "Componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import erro404 from "assets/erro_404.png"
import { useNavigate } from "react-router-dom"

const NaoEncontrada = () => {

    const navegar = useNavigate()

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Ops! Pagina não encontrada</h1>
                <p className={styles.paragrafo}>
                    Tem certeza que era isso que estava procurando?
                </p>
                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e recarregue a pagina, ou volte para a pagina inicial.
                </p>
                <div 
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                    >
                        <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
                </div>
                <img 
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="cachorro de oculos vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}

export default NaoEncontrada
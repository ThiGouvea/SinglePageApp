import styles from './Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas aos eventos
                </p>
            </div>
        </div>
    )
}

export default Banner
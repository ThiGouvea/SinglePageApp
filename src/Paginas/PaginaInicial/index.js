import BotaoPrincipal from "Componentes/BotaoPrincipal"
import styles from "./NaoEncontrada.module.css"
import { Link, useNavigate } from "react-router-dom"
import inicial from "assets/paginaInicial.png"
import { useEffect, useRef, useState } from "react"
import axios from "axios"


const PaginaInicial = () => {   
    const taLogado = localStorage.getItem('isAuthenticated')
    const navegar = useNavigate()
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    async function getConteudo() {
        const url = "http://localhost:8080/evento/";
        let response = await axios.get(url);
        return response.data;
    }

    useEffect(() => {
        getConteudo().then((coisa) => setData(coisa))
        console.log(data)
    }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    // if (!data || !data.length) return null;

    return (
        <>
            <div className={styles.conteudoContainer}>
                <h2>Encontre os eventos mais relevantes da sua área</h2>
                <img 
                    className={styles.imagemCachorro}
                    src={inicial}
                    alt="imagem de estudantes"
                />
            </div>

            <div className={styles.inscricoesAbertas}>
                inscrições ABERTAS
            </div>

            <div className={styles.container}>
                <div className={styles.carousel} ref={carousel}>
                    {data.map((item) => {
                        const { id, nome, data_inicio } = item;
                    return (
                        <Link className={styles.item} key={id} to={taLogado && ('http://localhost:3000/eventos') || ('http://localhost:3000/eventos_off')}>
                            <div className={styles.info}>
                                <span className={styles.name}>{nome}</span>
                            </div>
                            <div className={styles.dataHora}>
                                <span className={styles.name}>Inicio: {data_inicio}</span>
                            </div>
                        </Link>
                    );
                    })}
                </div>
                <div className={styles.buttons}>
                    <button onClick={handleLeftClick}>
                        <img src="/right.png" alt="Scroll Left" />
                    </button>

                    <button onClick={handleRightClick}>
                        <img src="/right.png" alt="Scroll Right" />
                    </button>
                </div>
            </div>
        </>
    )
}

export default PaginaInicial
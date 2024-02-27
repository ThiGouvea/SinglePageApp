import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const taLogado = localStorage.getItem('isAuthenticated')
    const ehADM = localStorage.getItem('adm')
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('adm')
        navigate('/login')
        window.location.reload()
        console.log('dsd')
    }

    if (ehADM) {
        return (
            <header>
            <nav className={styles.navegacao}>
                <button className={styles.link} onClick={logOut}>
                    Logout
                </button>
                <MenuLink to="/cadastro">
                    Cadastrar
                </MenuLink>
                <MenuLink to="/inscricao">
                    Inscrições
                </MenuLink>
                <MenuLink to="/listar">
                    Listar
                </MenuLink>
            </nav>
        </header>
        )
    }

    if (taLogado) {
        return (
            <header>
            <nav className={styles.navegacao}>
                <button className={styles.link} onClick={logOut}>
                    Logout
                </button>
                <MenuLink to="/eventos">
                    Eventos
                </MenuLink>
            </nav>
        </header>
    )
} else {
    return (
        <header>
        <nav className={styles.navegacao}>
            <MenuLink to="/login">
                Login
            </MenuLink>
        </nav>
        </header>
            )

}


}

export default Menu
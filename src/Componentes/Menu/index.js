import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/login">
                    Login
                </MenuLink>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>

            </nav>
        </header>
    )
}

export default Menu
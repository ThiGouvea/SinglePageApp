import styles from './Menu.module.css'
import MenuLink from '../MenuLink';

const Menu = () => {
    const taLogado = localStorage.getItem('isAuthenticated')
    const ehADM = false

    // if (ehADM) {
        return (
            <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/login">
                    Login
                </MenuLink>
                <MenuLink to="/eventos">
                    Eventos
                </MenuLink>
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
    // }

//     if (taLogado) {
//         return (
//             <header>
//             <nav className={styles.navegacao}>
//                 <MenuLink to="/login">
//                     Login
//                 </MenuLink>
//                 <MenuLink to="/eventos">
//                     Eventos
//                 </MenuLink>
//             </nav>
//         </header>
//     )
// } else {
//     return (
//         <header>
//         <nav className={styles.navegacao}>
//             <MenuLink to="/login">
//                 Login
//             </MenuLink>
//         </nav>
//         </header>
//             )

// }


}

export default Menu
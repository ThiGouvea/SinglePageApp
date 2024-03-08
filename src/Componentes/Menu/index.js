import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
import { useNavigate, useParams } from 'react-router-dom';
import MenuLinkNavegacao from 'Componentes/MenuLinkNavegacao';

const Menu = () => {
    const taLogado = localStorage.getItem('isAuthenticated')
    const ehADM = localStorage.getItem('adm')
    const navigate = useNavigate()
    const logOut = () => {
        localStorage.removeItem('isAuthenticated')
        localStorage.removeItem('adm')
        localStorage.removeItem('idUsuario')
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

    return (
        
        <header className={styles.header}>
            <div className={styles.navegacao}>
                <MenuLinkNavegacao to="/">
                    SevenaIFPR
                </MenuLinkNavegacao>
                {!taLogado && (
                    <MenuLink to="/eventos_off">
                    Eventos
                    </MenuLink>
                )}
                {(!ehADM && !taLogado) && (
                    <MenuLink to="/loginADM">
                    Organizador Eventos
                    </MenuLink>
                )}
            </div>
            {ehADM && (
                <nav className={styles.navegacao}>
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
            )}

            {taLogado && (
                <nav className={styles.navegacao}>
                    <MenuLink to="/eventos">
                        Eventos
                    </MenuLink>
                </nav>
            )} 

            {taLogado && (
                <nav className={styles.navegacao}>
                    <button className={styles.link} onClick={logOut}>
                        Logout
                    </button>
                    <button className={styles.link} onClick={() => navigate(-1)}>
                        Voltar
                    </button>
                </nav>
            )}

                       
            {!taLogado && (
                <nav className={styles.navegacao}>
                    <MenuLink to="/login">
                        Login
                    </MenuLink>
                </nav>
            )}
        </header>
    )





//     if (ehADM) {
//         return (
//             <header>
//             <nav className={styles.navegacao}>
//                 <button className={styles.link} onClick={logOut}>
//                     Logout
//                 </button>
//                 <MenuLink to="/cadastro">
//                     Cadastrar
//                 </MenuLink>
//                 <MenuLink to="/inscricao">
//                     Inscrições
//                 </MenuLink>
//                 <MenuLink to="/listar">
//                     Listar
//                 </MenuLink>
//             </nav>
//         </header>
//         )
//     }

//     if (taLogado) {
//         return (
//             <header>
//             <nav className={styles.navegacao}>
//                 <button className={styles.link} onClick={logOut}>
//                     Logout
//                 </button>
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
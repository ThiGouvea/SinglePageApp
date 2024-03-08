import { useLocation } from 'react-router-dom'
import styles from './Banner.module.css'

const Banner = () => {
    const endereco = useLocation()
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    {endereco.pathname == '/' && (
                        'Descubra, participe, conecte-se'
                    ) }
                    {endereco.pathname != '/' && (
                        'Ola'
                    )}
                </h1>
                <p className={styles.paragrafo}>
                {endereco.pathname == '/cadastro' && (
                    'Selecione uma categoria para fazer cadastro'
                ) ||    
                endereco.pathname == '/listar' && (
                    'Selecione uma categoria para listar o condeudo dela'
                ) ||
                endereco.pathname == '/loginADM' && (
                    'Faça login como criador de eventos para criar, gerenciar e deletar eventos e atividades.'
                ) ||
                endereco.pathname == '/login' && (
                    'Faça login para se cadastrar em eventos'
                ) ||
                endereco.pathname == '/eventos_off' && (
                    'Boas vindas aos eventos, para se inscrever deve primeiro fazer login'
                ) ||
                endereco.pathname != '/' && (
                        'Boas vindas aos eventos'
                    )}
                </p>
            </div>
        </div>
    )
}

export default Banner
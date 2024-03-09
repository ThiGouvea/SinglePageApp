import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Eventos = () => {
    const [conteudo, setConteudo] = useState([])
    const navigate = useNavigate()
    const [formulario, setFormulario] = useState([])
    const [loading, setLoading] = useState()

    const inscrever = async (ID) => {
        setFormulario([])
        setFormulario({evento_id: ID, usuario_id: localStorage.getItem('idUsuario'), status: "ativo", data: "22/01/2024", hora: "08:08"})
        formulario.usuario_id = parseInt(formulario.usuario_id)
        console.log(formulario)
        try {
            setLoading(true)
            const {response} = await axios.post('http://localhost:8080/inscricaoEmEventos/', formulario).catch(function (error) {
                if (error.response) {
                  console.log(error.response.data.MENSAGEM);
                  console.log(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  console.log(error.request);
                } else {
                  console.log('Error', error.message);
                }
            });

            if (response === undefined) {
              alert('Inscrito')
              localStorage.setItem(`evento${ID}`, true)
            }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro')
        }

        finally {
        setLoading(false)
        }
      };

    async function getConteudo(link) {
        const url = link;
        let response = await axios.get(url);
        return response.data;
      }

    

    useEffect(() => {
        getConteudo("http://localhost:8080/evento/").then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    
    return (
      <div className={styles.formulario}>    
        <ul className={styles.itemLista}>
            {conteudo.map(conteudo => (
                <li key={conteudo.ID} className={styles.post}>
                    <div className={styles.nomeEvento}>
                      {conteudo.nome}
                    </div>
                    <div className={styles.descricao}>
                      Sobre o evento: {conteudo.descricao}
                    </div>
                    <div className={styles.dataHora}>
                      <h4>
                        Data inicio: {conteudo.data_inicio}
                      </h4>
                      <h4>
                        Data final: {conteudo.data_final}
                      </h4>
                    </div>

                    <div className={styles.dataHora}>
                    <h4>
                      Hora inicio: {conteudo.horaInicio}
                    </h4>
                    <h4>
                      Hora fim: {conteudo.horaFim}
                    </h4> 

                    </div>
                    {localStorage.getItem(`evento${conteudo.ID}`) ? (
                        <button 
                        className={styles.botaoPrincipal}
                        onClick={() => navigate('/atividades')}
                        >
                        Cadastrar em Atividades
                       </button>  
                    ) : (
                    <button 
                        type="submit"
                        className={styles.botaoPrincipal}
                        onClick={() => inscrever(conteudo.ID)}
                        >
                        Se Inscrever
                    </button>)}       
                </li>
            ))}
        </ul>

      </div>
      
    )
}

export default Eventos
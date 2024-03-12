import styles from "./CadastrarAtividade.module.css"
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Eventos = () => {
  const [dataLoaded,  setDataLoaded] = useState(false);
  const [idUsuario, setIdUsuario] = useState()
  const [conteudo, setConteudo] = useState([])
  const [idsEventos, setIdsEventos] = useState([])
  const navigate = useNavigate()
  const [formulario, setFormulario] = useState([])
  const [loading, setLoading] = useState()

    const inscrever = async (ID) => {
      try {
        setFormulario({evento_id: ID, usuario_id: idUsuario, status: "ativo", data: "22/01/2024", hora: "08:08"})
        formulario.usuario_id = parseInt(formulario.usuario_id)
        console.log(formulario)
            setLoading(true)
            const response = await axios.post('http://localhost:8080/inscricaoEmEventos/', formulario).catch(function (error) {
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


        finally {
        setLoading(false)
        }
      };

    async function getConteudo(link) {
        const url = link;
        let response = await axios.get(url);
        return response.data;
      }

      function mapEveventos(ids) {
        ids.map(e => (localStorage.setItem(`evento${e.ID}`, true)))
        console.log(ids)
      }
      
      const getData = () => {
        setDataLoaded(false)
        getConteudo("http://localhost:8080/evento/").then((data) => setConteudo(data))
        console.log(idsEventos)
        getConteudo(`http://localhost:8080/evento/usuario/${localStorage.getItem('idUsuario')}`)
          .then((data) => setIdsEventos(data))
        setIdUsuario(localStorage.getItem('idUsuario'))
        mapEveventos(idsEventos)
        setDataLoaded(true)
      }

      const irParaAtividade = (eventoID) => {
        navigate(`/atividades/${eventoID}`)
      }

 
    useEffect(() => {
      setIdUsuario(localStorage.getItem('idUsuario'))

        getConteudo("http://localhost:8080/evento/").then((data) => setConteudo(data))
        getConteudo(`http://localhost:8080/evento/usuario/${localStorage.getItem('idUsuario')}`).then((data) => setIdsEventos(data))
        console.log(idsEventos)
        mapEveventos(idsEventos)
      
    }, []);
    
       
    
    return (
      <>
      {!dataLoaded ?  (
      <div className={styles.optionsDupla}>
        <button 
            type="submit"
            className={styles.botaoPrincipal}
            onClick={getData}
            >
            Visualizar Eventos
        </button>
        <button 
            type="submit"
            className={styles.botaoPrincipal}
            onClick={() => navigate(-1)}
            >
            Voltar
        </button>
      </div>) : (
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
                        onClick={() =>irParaAtividade(conteudo.ID)}
                        >
                        Cadastrar em Atividades
                       </button>  
                    ) : (
                    <button 
                        type="submit"
                        className={styles.botaoPrincipal}
                        onClick={() => inscrever(conteudo.ID)}
                        disabled={!dataLoaded}
                        >
                        Se Inscrever
                    </button>)}       
                </li>
            ))}
        </ul>
      </div>
      )}
      </>
      
    )
}

export default Eventos
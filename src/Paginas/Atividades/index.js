import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Atividades = () => {
    const [conteudo, setConteudo] = useState([])
    const [locais, setLocais] = useState([])

    const [formulario, setFormulario] = useState([])
    const [loading, setLoading] = useState()

    const inscrever = async (ID) => {
        // event.preventDefault();
        setFormulario({atividade_id: ID,evento_id: 2, usuario_id: localStorage.getItem('idUsuario'), status: "confirmada",controle_presenca_id: 1, data: "22/04/2024", hora: "08:08"})
        formulario.usuario_id = parseInt(formulario.usuario_id)
        console.log(formulario)
        try {
            setLoading(true)
            console.log(formulario)
            const {response} = await axios.post('http://localhost:8080/inscricaoEmAtividades/', formulario).catch(function (error) {
                if (error.response) {
                  window.alert(error.response.data.MENSAGEM);
                  window.alert(error.response.data.error);
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
              localStorage.setItem(`atividae${ID}`, true)
            }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro' + err)
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
        getConteudo("http://localhost:8080/atividade/").then((data) => setConteudo(data))
        getConteudo("http://localhost:8080/local/").then((data) => setLocais(data))
        // console.log(conteudo) 
    }, [])


    
    return (
      <div className={styles.formulario}>    
        <ul>
        {conteudo.map(conteudo => (
                <li key={conteudo.ID} className="nomesOptions">
                    <h4>
                      Titulo: {conteudo.titulo}
                    </h4>
                    <h4>
                      Resumo: {conteudo.resumo}
                    </h4>
                    <h4>
                      Data: {conteudo.data}
                    </h4>
                    <h4>
                      Hora inicio: {conteudo.hora_inicio}
                    </h4>
                    <h4>
                      Hora termino: {conteudo.hora_termino}
                    </h4>
                    <h4>
                      Observação: {conteudo.observacao}
                    </h4>    
                    <h4>
                      Ministrante: {conteudo.ministrante}
                    </h4>  
                    <h4>
                      Quantidade de vagas: {conteudo.quantidade_vagas}
                    </h4>
                    <h4>
                      Duração: {conteudo.duracao}hrs
                    </h4>  
                    <h4>
                      Cargar horaria: {conteudo.carga_horaria}hrs
                    </h4> 
                    <h4>
                      local: {1}
                    </h4>  

                    {localStorage.getItem(`atividade${conteudo.ID}`) ? (
                        <button 
                        className={styles.botaoPrincipal}
                        >
                        Inscrito
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

export default Atividades
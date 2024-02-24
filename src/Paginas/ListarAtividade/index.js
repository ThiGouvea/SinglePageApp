import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarAtividade = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/atividade/";
        let response = await axios.get(url);
        return response.data;
      }

      async function deleteConteudo(ID) {
        const url = `http://localhost:8080/usuario/${ID}/`
        axios.delete(url)
      }

      async function editarConteudo(ID) {
        const url = `http://localhost:8080/usuario/${ID}/`
        axios.delete(url)
      }

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])

    return (
      <div className={styles.formulario}>
        
        <ul>
            {conteudo.map(conteudo => (
                <li key={conteudo.ID} className="nomesOptions">
                    <h4>
                      <b>Status: </b>{conteudo.status}
                    </h4>
                    <h4>
                      Id tipo de atividade: {conteudo.tipo_atividade_id}
                    </h4>
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
                      Id local: {conteudo.local_id}
                    </h4>    
                    <button 
                      type="submit"
                      onClick={() => deleteConteudo(conteudo.ID)}
                      className={styles.submit}
                      text='Deletar'
                      >Deletar
                    </button>
                    <button 
                      type="submit"
                      onClick={() => editarConteudo(conteudo.ID)}
                      className={styles.submit}
                      text='Editar'
                      >Editar
                    </button>                  
                </li>
            ))}
        </ul>


      </div>
      
    )
}

export default ListarAtividade
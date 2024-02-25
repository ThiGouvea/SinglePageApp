import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import ListaLinkItem from "Componentes/ListaLinkItem";
import BotaoEditar from "Componentes/BotaoEditar";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarLocal = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/local/";
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    async function deleteConteudo(ID) {
      const url = `http://localhost:8080/usuario/${ID}`;
      axios.delete(url)
    }
    
    return (
      <div className={styles.formulario}>
        
        <ul>
            {conteudo.map(conteudo => (
                <li key={conteudo.ID}>
                    <h4>
                      <b>Status: </b>{conteudo.status}
                    </h4>
                    <h4>
                      Sala: {conteudo.sala}
                    </h4>
                    <h4>
                      Setor: {conteudo.setor}
                    </h4>
                    <h4>
                      Data/Hora fim: {conteudo.data_hora_fim}
                    </h4>
                    <button 
                      type="submit"
                      onClick={() => deleteConteudo(conteudo.ID)}
                      className={styles.submit}
                      text='Deletar'
                      >Deletar
                    </button>
                    <BotaoEditar destino={"/editar/editar_local/"} IDDestino={`${conteudo.ID}`}>
                      Editar
                    </BotaoEditar>
                  
                                      
                </li>
            ))}
        </ul>

        

      </div>
      
    )
}

export default ListarLocal
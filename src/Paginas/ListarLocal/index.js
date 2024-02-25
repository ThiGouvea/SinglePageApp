import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import ListaLinkItem from "Componentes/ListaLinkItem";

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
      const url = `http://localhost:8080/usuario/:${ID}`;
      const {response} = await axios.delete(url).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          window.alert(error.response.data.error);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser 
          // and an instance of http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    });
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
                  
                                      
                </li>
            ))}
        </ul>

        

      </div>
      
    )
}

export default ListarLocal
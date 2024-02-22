import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import ListaLinkItem from "Componentes/ListaLinkItem";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarUsuario = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/usuario/";
        let response = await axios.get(url);
        return response.data;
      }

    async function deleteConteudo(ID) {
      const url = `http://localhost:8080/usuario/:${ID}/`;
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

  

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    
    return (
      <div className={styles.formulario}>
        
        <ul>
            {conteudo.map(conteudo => (
                <li key={conteudo.ID}>
                    <h4>
                      <b>Nome: </b>{conteudo.nome}
                    </h4>
                    <h4>
                      Email: {conteudo.email}
                    </h4>
                    <h4>
                      CPF: {conteudo.cpf}
                    </h4>
                    <h4>
                      RG: {conteudo.rg}
                    </h4>
                    <h4>
                      Status: {conteudo.status}
                    </h4>
                    <h4>
                      Telefone: {conteudo.telefone}
                    </h4>
                    <h4>
                      Data de Nascimento: {conteudo.data_nascimento}
                    </h4>
                    <h4>
                      Escolaridade: {conteudo.escolaridade}
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

export default ListarUsuario
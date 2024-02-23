import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarEvento = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/evento/";
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    async function deleteConteudo(ID) {
      const url = `http://localhost:8080/evento/:${ID}/`;
      const {response} = await axios.delete(url).catch(function (error) {
        if (error.response) {

          window.alert(error.response.data.error);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {

          console.log(error.request);
        } else {

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
                      Nome: {conteudo.nome}
                    </h4>
                    <h4>
                      Descrição: {conteudo.descricao}
                    </h4>
                    <h4>
                      Data inicio: {conteudo.data_inicio}
                    </h4>
                    <h4>
                      Data final: {conteudo.data_final}
                    </h4>
                    <h4>
                      Hora inicio: {conteudo.horaInicio}
                    </h4>
                    <h4>
                      Hora fim: {conteudo.horaFim}
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

export default ListarEvento
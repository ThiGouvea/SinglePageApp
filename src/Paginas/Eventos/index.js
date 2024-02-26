import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import BotaoEditar from "Componentes/BotaoEditar";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const Eventos = () => {
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
                    <BotaoEditar destino={"/eventos/"} IDDestino={`${conteudo.ID}`}>
                      Se inscrever
                    </BotaoEditar>         
                </li>
            ))}
        </ul>

      </div>
      
    )
}

export default Eventos
import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import ListaLinkItem from "Componentes/ListaLinkItem";
import BotaoEditar from "Componentes/BotaoEditar";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarInstituicao = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/instituicao/";
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    async function deleteConteudo(ID) {
      const url = `http://localhost:8080/instituicao/${ID}`;
      await axios.delete(url)
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
                      Sigla: {conteudo.sigla}
                    </h4>
                    <h4>
                      CNPJ: {conteudo.cnpj}
                    </h4>
                    <h4>
                      Endereco: {conteudo.endereco}
                    </h4>
                    <h4>
                      Telefone: {conteudo.telefone}
                    </h4>
                    <h4>
                      Email: {conteudo.email}
                    </h4>
                    <h4>
                      Id Cidade: {conteudo.cidade_id}
                    </h4>
                    <button 
                      type="submit"
                      onClick={() => deleteConteudo(conteudo.ID)}
                      className={styles.submit}
                      text='Deletar'
                      >Deletar
                    </button>    
                    <BotaoEditar destino={"/editar/editar_instituicao/"} IDDestino={`${conteudo.ID}`}>
                      Editar
                    </BotaoEditar>
            
                </li>
            ))}
        </ul>


      </div>
      
    )
}

export default ListarInstituicao
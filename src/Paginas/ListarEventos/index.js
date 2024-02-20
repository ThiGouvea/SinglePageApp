import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';
import ListaLinkItem from "Componentes/ListaLinkItem";

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarEvento = () => {
    const [conteudo, setConteudo] = useState([])

    async function getConteudo() {
        const url = "http://localhost:8080/usuario/";
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo().then((data) => setConteudo(data))
        console.log(conteudo) 
    }, [])


    const listarConteudo = async (event) => {
      getConteudo().then((data) => setConteudo(data))
      console.log(conteudo)
  }
    
    return (
      <div>
        <button 
          type="submit"
          onClick={listarConteudo}
          className={styles.submit}
          text='Entrar'
          >Listar
        </button>

        <ul className={styles.posts}>
            {conteudo.map(conteudo => (
                <li key={conteudo.ID}>
                    <h1>
                      {conteudo.ID}
                    </h1>
                </li>
            ))}
        </ul>

      </div>
      
    )
}

export default ListarEvento    

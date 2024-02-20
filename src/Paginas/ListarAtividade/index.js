import styles from "./CadastrarAtividade.module.css"
import { useEffect, useState } from "react";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const ListarAtividade = () => {
    const [atividade, setAtividade] = useState([])

    async function status() {
        const url = "http://localhost:8080/atividade/";
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        status().then((data) => setAtividade(data))
        console.log(atividade)
    }, [])
    
    return (
        <div className={styles.formulario}>

        </div>
    )
}

export default ListarAtividade
import { useState } from "react";
import styles from "./BotaoPrincipal.module.css"
import axios from "axios";

const BotaoInscreverEmEvento = ({children, IDUsuario, IDEvento}) => {
    const [formulario, setFormulario] = useState([])
    const [loading, setLoading] = useState()

    const inscrever = async (event) => {
        // event.preventDefault();
        setFormulario({evento_id: IDEvento, usuario_id: IDUsuario, status: "ativo", data: "22/01/2024", hora: "08:08"})
        formulario.usuario_id = parseInt(formulario.usuario_id)
        console.log(formulario)
        try {
            setLoading(true)
            console.log(formulario)
            const {response} = await axios.post('http://localhost:8080/inscricaoEmEventos/', formulario).catch(function (error) {
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

            window.alert(response.ID)
            
            if (response === undefined) {
              alert('cadastrado')
            }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro' + err)
        }

        finally {
        setLoading(false)
        }
      };

    return (
        <button 
            type="submit"
            className={styles.botaoPrincipal}
            onClick={() => inscrever()}
            >
            Se Inscrever
        </button>
    )
}

export default BotaoInscreverEmEvento
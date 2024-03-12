import Input from "Componentes/Input"
import styles from "./CadastrarEventos.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import TextArea from "Componentes/TextArea";


const api = axios.create({
  baseURL: 'http://localhost:8080'
});


const CadastrarEventos = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navegar = useNavigate()
    const [local, setLocal] = useState([])

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }
    
      useEffect(() => {
        getConteudo("http://localhost:8080/local/").then((data) => setLocal(data))
        
    }, [])
    
    
    const onLogin = async (event) => {
        try {
            event.preventDefault();
            setLoading(true)
            form.local_id = parseInt(form.local_id);
            setForm({...form, ["status"]: "ativo"})
            // console.log(form)

            const response = await axios.post('http://localhost:8080/evento/', form).catch(function (error) {
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
            console.log(response.data)
            console.log(response.status)
            alert('cadastrado')
            
            if (response == undefined) {
                alert('cadastrado')
              }
        }

        catch (err) {
            console.log('Algo deu errado com o Cadastro' + err)
        }

        finally {
        setLoading(false)
        
        }
      };

    const optionsLocais = local.map((option) => 
      <option key={option.ID} value={option.ID}>{`sala ${option.sala}, ${option.setor}`}</option>
  );

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o nome do evento</h3>
                <Input 
                    size='30'
                    name='nome' 
                    type="string" 
                    required 
                    placeholder="Nome do evento"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a descrição do evento</h3>
                <TextArea      
                    rows='8'
                    cols='30'              
                    name='descricao' 
                    type="string" 
                    required 
                    placeholder="Descrição do evento"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de inicio</h3>
                    <Input 
                        name='data_inicio' 
                        type="date" 
                        required 
                        placeholder="data inicio"
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de termino</h3>   
                    <Input 
                        name='data_final' 
                        type="date" 
                        required 
                        placeholder="Termino evento"
                        onChange={HandleOnChange} />
                </div>
            </div>


            
            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='horaInicio' 
                        type="time" 
                        required 
                        placeholder="Insira o nome do evento"
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='horaFim' 
                        type="time" 
                        required 
                        placeholder="Insira o nome do evento"
                        onChange={HandleOnChange} />
                </div>
            </div>
            
            <div className={styles.options}>
            <h3 className={styles.nomesOptions} >Selecione uma Sala</h3>
                <select
                    name='local_id'
                    className={styles.comboBox}
                    type='number'
                    onChange={HandleOnChange}
                    required>
                        <option value="">Selecione</option>
                        {optionsLocais}
                </select>
            </div>
            <div className={styles.optionsDupla}>
                <button 
                    type="submit"
                    onClick={onLogin}
                    className={styles.submit}
                    text='Entrar'
                    >Cadastrar
                </button>
                <button 
                    type="submit"
                    onClick={() => navegar(-1)}
                    className={styles.submit}
                    text='Entrar'
                    >Voltar
                </button>
            </div>
        </form>
    )
}

export default CadastrarEventos
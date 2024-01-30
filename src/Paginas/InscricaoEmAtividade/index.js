import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';
import ComboBox from "Componentes/ComboBox";


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarAtividade = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);
            const {response} = await axios.post('http://localhost:8080/login', form)

            console.log(response)
            
            if ( response === true ) {
              alert('evento cadastrado')
              navigate('/eventos')
            }
        }

        catch (err) {
            alert('Algo deu errado com o Cadastro' + err)
        }

        finally {
        setLoading(false)
        }
      };

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <ComboBox name="status" id="status">
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </ComboBox>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Tipo Atividade //todo</h3>
                <Input 
                    name='nome' 
                    type="string" 
                    required 
                    placeholder="Nome da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o titulo</h3>
                <Input 
                    name='titulo' 
                    type="string" 
                    required 
                    placeholder="Sigla da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Resumo da atividade</h3>
                <Input 
                    name='resumo' 
                    type="string" 
                    
                    placeholder="Digite o resumo"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data da atividade</h3>
                    <Input 
                        name='data' 
                        type="date" 
                        required 
                        placeholder="Data atividade"
                        onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='hora_inicio' 
                        type="time" 
                        required 
                        placeholder="Insira a hora de inicio"
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='hora_termino' 
                        type="time" 
                        required 
                        placeholder="Insira a hora do termino"
                        onChange={HandleOnChange} />
                </div>
            </div>

            

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o valor da inscrição</h3>
                <Input 
                    name='valor_inscricao' 
                    type="number"
                    step="0.01"
                    min="0" 
                    required 
                    placeholder="Endereço instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira alguma observação</h3>
                <Input 
                    name='observacao' 
                    type="string" 
                    
                    placeholder="Digite alguma observação"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Nome do ministrante</h3>
                <Input 
                    name='ministrante' 
                    type="string" 
                    required 
                    placeholder="Digite o nome do ministrante"
                    onChange={HandleOnChange} />
            </div>



            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a quantidade de vagas</h3>
                <Input 
                    name='quantidade_vagas' 
                    type="number" 
                    required 
                    placeholder="Quantidade vagas"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a duração</h3>
                <Input 
                    name='duracao' 
                    type="number"
                    step="0.01"
                    min="0"
                    placeholder="duração"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a carga horaria</h3>
                <Input 
                    name='carga_horaria' 
                    type="number"
                    placeholder="Carga horaria"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a quantidade de inscritos</h3>
                <Input 
                    name='quantidade_inscritos' 
                    type="number"
                    required
                    placeholder="Carga horaria"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Local ID //todo</h3>
                <Input 
                    name='local_id' 
                    type="number" 
                    required 
                    placeholder="ID do local"
                    onChange={HandleOnChange} />
            </div>            

            
            <button 
                type="submit"
                onClick={onLogin}
                className={styles.submit}
                text='Entrar'
                >Cadastrar
            </button>
        </form>
    )
}

export default CadastrarAtividade
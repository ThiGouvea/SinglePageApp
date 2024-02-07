import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';





// do




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
            form.hora_inicio += "Z"
            form.hora_termino += "Z"
            form.data += "Z"
            form.tipo_atividade_id = parseInt(form.tipo_atividade_id)
            form.valor_inscricao = parseInt(form.valor_inscricao);
            form.local_id = parseInt(form.local_id);
            form.quantidade_vagas = parseInt(form.quantidade_vagas);
            form.duracao = parseInt(form.duracao);
            form.carga_horaria = parseInt(form.carga_horaria);
            form.local_id = parseInt(form.local_id);
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);
            console.log(form)
            const {response} = await axios.post('http://localhost:8080/atividade/', form)

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
                <select className={styles.comboBox} onChange={HandleOnChange} name="status" id="status">
                    <option value="">Selecione</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                </select>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Tipo Atividade //todo</h3>
                <Input 
                    name='tipo_atividade_id' 
                    type="number" 
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
                        type="datetime-local" 
                        step="1"
                        required 
                        placeholder="Data atividade"
                        onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario inicio</h3>
                    <Input 
                        name='hora_inicio' 
                        type="datetime-local" 
                        step="1"
                        required 
                        placeholder="Insira a hora de inicio"
                        onChange={HandleOnChange} />
                </div>
                
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Horario termino</h3>
                    <Input 
                        name='hora_termino' 
                        type="datetime-local" 
                        step="1"
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
                    // step="0.01"
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
                    // step="0.01"
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
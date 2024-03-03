import Input from "Componentes/Input"
import styles from "./CadastrarAtividade.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import Select from 'react-select'

const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarAtividade = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
    const [conteudo, setConteudo] = useState([])
    const [local, setLocal] = useState([])

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }

    useEffect(() => {
        getConteudo("http://localhost:8080/tipoAtividades/").then((data) => setConteudo(data))
        getConteudo("http://localhost:8080/local/").then((data) => setLocal(data))
        console.log(conteudo) 
    }, [])
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.tipo_atividade_id = parseInt(form.tipo_atividade_id)
            form.valor_inscricao = parseInt(form.valor_inscricao);
            form.local_id = parseInt(form.local_id);
            form.quantidade_vagas = parseInt(form.quantidade_vagas);
            form.duracao = parseInt(form.duracao);
            form.carga_horaria = parseInt(form.carga_horaria);
            form.local_id = parseInt(form.local_id);
            console.log(form)
            const response = await axios.post('http://localhost:8080/atividade/', form).catch(function (error) {
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

    const optionsLocais = local.map((option) => 
        <option key={option.ID} value={option.ID}>{`sala ${option.sala}, ${option.setor}`}</option>
    );

    const optionsTipoAtividade = conteudo.map((option) => 
        <option key={option.ID} value={option.ID}>{option.nome}</option>
    );

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
            <h3 className={styles.nomesOptions} >Selecione um tipo de atividade</h3>
                <select
                    className={styles.comboBox}
                    name='tipo_atividade_id'
                    type='number'
                    onChange={HandleOnChange}
                    required>
                        <option value="">Selecione</option>
                        {optionsTipoAtividade}
                </select>
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
                <h3 className={styles.nomesOptions} >Selecione uma Sala</h3>
                    <select 
                        className={styles.comboBox}
                        name='local_id'
                        type='number'
                        onChange={HandleOnChange}
                        required>
                            <option value="">Selecione</option>
                            {optionsLocais}
                        </select>
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
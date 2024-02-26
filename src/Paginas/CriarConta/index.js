import Input from "Componentes/Input"
import styles from "./CadastrarUsuarios.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import Cidades from "assets/json/estados-cidades2.json"
import Select from "react-select";


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CriarConta = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const [instituicao, setiInstituicao] = useState([])
    const cidade = Cidades
    const navigate = useNavigate()
    
    

    async function getConteudo(links) {
        const url = links;
        let response = await axios.get(url);
        return response.data;
      }
        
    useEffect(() => {
        getConteudo("http://localhost:8080/instituicao/").then((data) => setiInstituicao(data))
    }, [])

    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            form.tipo_usuario_id = parseInt(form.tipo_usuario_id)
            form.instituicao_id = parseInt(form.instituicao_id)
            form.cidadeid = parseInt(form.cidadeid)
            form.tipo_usuario_id = 1;
            console.log(form)
            // const responses = await axios.get('http://localhost:8080/relatorio_inscritos_por_atividade/1');
            // console.log('response do Login', responses)
            // const response = await UserService.login(form);
            const {response} = await axios.post('http://localhost:8080/usuario/', form).catch(function (error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  window.alert(error.response.data.MENSAGEM);
                  window.alert(error.response.data.error);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser 
                  // and an instance of http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
            });

            window.alert(response.ID)
            
            if (response === true) {
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

    const HandleOnSelect = (event) => {
        setForm({...form, [event.name]: event.value})
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
                <h3 className={styles.nomesOptions} >Insira o nome de usuario</h3>
                <Input 
                    name='nome' 
                    type="string" 
                    required 
                    placeholder="Nome do usuario"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira o CPF</h3>
                    <Input 
                        name='cpf' 
                        type="string" 
                        required 
                        placeholder="Numero de CPF"
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira o RG</h3>
                    <Input 
                        name='rg' 
                        type="string" 
                        required 
                        placeholder="Numero do RG"
                        onChange={HandleOnChange} />
                </div>
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira o genero</h3>
                    <select className={styles.comboBox} onChange={HandleOnChange} name="genero" id="genero">
                    <option value="">Selecione</option>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>

                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de nascimento</h3>
                    <Input 
                        name='data_nascimento' 
                        type="date"
                        required 
                        placeholder="data nascimento"
                        onChange={HandleOnChange} />
                </div>
            </div>
                
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o email</h3>
                <Input 
                    name='email' 
                    type="email" 
                    required 
                    placeholder="Digite o email"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a senha</h3>
                <Input 
                    name='senha' 
                    type="password" 
                    required 
                    placeholder="Digite a senha"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o numero de telefone</h3>
                <Input 
                    name='telefone' 
                    type="string" 
                    required 
                    placeholder="Digite o telefone"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione a escolaridade</h3>
                    <select className={styles.comboBox} onChange={HandleOnChange} name="escolaridade" id="escolaridade">
                        <option value="Fundamental_incompleto">Fundamental incompleto</option>
                        <option value="Fundamental_completo">Fundamental completo</option>
                        <option value="Medio_incompleto">Ensino medio incompleto</option>
                        <option value="Medio_completo">Ensino medio completo</option>
                        <option value="Superior_incompleto">Ensino superior incompleto</option>
                        <option value="superior">Ensino superior completo</option>
                    </select>
                </div>

                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a profissão</h3>
                    <Input 
                        name='profissao' 
                        type="string" 
                        required 
                        placeholder="Digite a sua profissão"
                        onChange={HandleOnChange} />
                </div>
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione uma Instituição</h3>
                <Select
                    name='instituicao_id'
                    type='number'
                    required
                    options={instituicao}
                    value={instituicao.ID}
                    onChange={HandleOnSelect}
                    getOptionLabel={(instituicao) => instituicao.nome }
                    getOptionValue={(instituicao) => instituicao.ID}
                />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione uma Cidade</h3>
                <Select
                    name='cidade_id'
                    type='number'
                    required
                    options={cidade}
                    value={cidade.ID}
                    onChange={HandleOnSelect}
                    getOptionLabel={(cidade) => cidade.name }
                    getOptionValue={(cidade) => cidade.ID}
                />
            </div>

            <button 
                type="submit"
                onClick={onLogin}
                className={styles.submit}
                text='Entrar'
                >Criar conta
            </button>
        </form>
    )
}

export default CriarConta
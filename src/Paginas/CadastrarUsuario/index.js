import Input from "Componentes/Input"
import styles from "./CadastrarUsuarios.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarUsuario = () => {
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
    
    return (
        <form className={styles.formulario}>
            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione o status</h3>
                <select className={styles.comboBox} name="status" id="status">
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
                        name='CPF' 
                        type="string" 
                        required 
                        placeholder="Numero de CPF"
                        onChange={HandleOnChange} />
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira o RG</h3>
                    <Input 
                        name='RG' 
                        type="string" 
                        required 
                        placeholder="Numero do RG"
                        onChange={HandleOnChange} />
                </div>
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira o genero</h3>
                    <select className={styles.comboBox} name="genero" id="genero">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                </div>
                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a data de nascimento</h3>
                    <Input 
                        name='DataNascimento' 
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
                    name='Telefone' 
                    type="string" 
                    required 
                    placeholder="Digite o telefone"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.optionsDupla}>
                <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Selecione a escolaridade</h3>
                    <select className={styles.comboBox} name="escolaridade" id="escolaridade">
                        <option value="Fundamental_incompleto">Fundamental incompleto</option>
                        <option value="Fundamental_completo">Fundamental completo</option>
                        <option value="Medio_incompleto">Ensino medio incompleto</option>
                        <option value="Medio_completo">Ensino medio completo</option>
                        <option value="Superior_incompleto">Ensino superior incompleto</option>
                        <option value="Superior_completo">Ensino superior completo</option>
                    </select>
                </div>

                <div className={styles.options}>
                    <h3 className={styles.nomesOptions} >Insira a profissão</h3>
                    <Input 
                        name='Profissao' 
                        type="string" 
                        required 
                        placeholder="Digite a sua profissão"
                        onChange={HandleOnChange} />
                </div>
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

export default CadastrarUsuario
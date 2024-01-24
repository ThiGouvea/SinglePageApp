import Input from "Componentes/Input"
import styles from "./CadastrarInstituicao.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarInstituicao = () => {
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
                <h3 className={styles.nomesOptions} >Insira o nome da instituição</h3>
                <Input 
                    name='nome' 
                    type="string" 
                    required 
                    placeholder="Nome da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira a sigla da instituição</h3>
                <Input 
                    name='sigla' 
                    type="string" 
                    required 
                    placeholder="Sigla da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o CNPJ da instituição</h3>
                <Input 
                    name='cnpj' 
                    type="string" 
                    required 
                    placeholder="CNPJ da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o endereço da instituição</h3>
                <Input 
                    name='endereco' 
                    type="string" 
                    required 
                    placeholder="Endereço instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o telefone</h3>
                <Input 
                    name='telefone' 
                    type="number" 
                    required 
                    placeholder="Telefone da instituição"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >Insira o email da instituição</h3>
                <Input 
                    name='email' 
                    type="email" 
                    required 
                    placeholder="Email"
                    onChange={HandleOnChange} />
            </div>

            <div className={styles.options}>
                <h3 className={styles.nomesOptions} >ID cidade</h3>
                <Input 
                    name='cidade_id' 
                    type="number" 
                    required 
                    placeholder="ID cidade"
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

export default CadastrarInstituicao
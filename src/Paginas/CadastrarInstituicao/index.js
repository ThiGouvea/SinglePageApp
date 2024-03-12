import Input from "Componentes/Input"
import styles from "./CadastrarInstituicao.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react";
import axios from 'axios';
import Cidades from "assets/json/estados-cidades2.json"
import Select from "react-select";


const api = axios.create({
  baseURL: 'http://localhost:8080'
});

const CadastrarInstituicao = () => {
    
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navegar = useNavigate()
    const cidade = Cidades
    
    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            setForm({...form, ["status"]: "ativo"})
            form.cidade_id = parseInt(form.cidade_id)
            console.log(form)
            const {response} = await axios.post('http://localhost:8080/instituicao/', form).catch(function (error) {
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

            console.log(response)
            
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

    const options = cidade.map((option) => 
    <option key={option.id} value={option.id}>{option.name}</option>
    );

    const HandleOnChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const HandleOnSelect = (event) => {
        setForm({...form, [event.name]: event.value})
    }
    
    return (
        <form className={styles.formulario}>   
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
                <h3 className={styles.nomesOptions} >Selecione uma Cidade</h3>
                <select
                    className={styles.comboBox}
                    name='cidade_id'
                    type='number'
                    onChange={HandleOnSelect}
                    required>
                        <option value="">Selecione</option>
                        {options}
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

export default CadastrarInstituicao
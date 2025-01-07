import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './Login.css';
import { createContext, useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button';

function handleSubmit(event) {
    event.preventDefault();

  }


const Login = () => {
    
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = () => {
      if (!email | !password) {
        alert("Preencha todos os campos");
        return;
      }
  
  navigate('/PgInicial')

    };
    return (
        
        <div className="container">
            <form onSubmit={handleSubmit}>

                <div>
                    <div className='first-column'>

                        <h2 className='titulo2'>Acesse o sistema</h2>

                       
                        <input type="email" placeholder="E-mail"
                            onChange={(e) =>[setEmail(e.target.value), setError("")]} required  />

                        <FaEnvelope className='icon' />
                     
                    </div>
                   
                        <input type="password" placeholder="Senha" onChange={(e) => [setPassword(e.target.value), setError("") ]} minLength='6' required className='mb-3'/>
                        <FaLock className='icon' />
                    
                    <labelError>{error}</labelError>

                    <div className='recall-forget'>


                        <a href='#' className='EsqueceuSenha'>Esqueceu a senha?</a>

                    </div>

                </div>

                <button type='submit' onClick={handleLogin} className='botao-entrar'>Entrar</button>

            </form>


            <div className='content1 first-content'>
                <div className='first-column'>
                    <h2 className='title'>Bem vindo!</h2>
                    <p className='description'>Faça seu login para acessar o nosso sistema!</p>

                    <p className='NPC'>Não possui uma conta?</p>
                    <button onClick={() => { navigate('/Cadastro') }} className='botao-cadastro'>Faça seu cadastro!</button>
                </div>
            </div>
        </div>
    )
}

export default Login
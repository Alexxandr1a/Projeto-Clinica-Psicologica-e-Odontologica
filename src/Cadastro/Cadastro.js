import React from 'react'
import './Cadastro.css'
import {FaUser, FaLock, FaEnvelope, FaPhone,FaCalendarAlt} from 'react-icons/fa';  
import { useState } from 'react';
import{Link, useNavigate} from 'react-router-dom'



function handleLoad(event) {
  event.preventDefault(); // Evita que a página recarregue
  // Sua lógica de envio aqui
}

const Cadastro = () => {
  
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  const handleSubmit = (e) => {
 
    
   
  };



  const[username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const[telefone, setTelefone] = useState("");
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

      
  const maxDate = getCurrentDate();
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
   
    const selectedDate = new Date(birthDate);

    if (!email |!telefone|!birthDate |!password | !Confirmpassword) {
      alert("Preencha todos os campos");
      return;
    } else if (password !== Confirmpassword) {
      alert("As senhas não são iguais");
      return;
    } else{
    alert("Usuário cadatrado com sucesso!");
    navigate('/Login')
  };
  }


  return (
    <div className='container2'>
  
    
        <div className='content second-content'>
                <div className='second-column'>
                    <h2 className='title2'>Cadastro de pacientes</h2>
                    <p className='descrição'>Preencha seus dados para acessar o nosso sistema!</p>
                    
                    <p className='JPC'>Já possui uma conta?</p>
                    <button onClick={()=>{navigate('/Login')}} className='btn-primary'>Faça seu login!</button>
                  
                </div>
            </div>        

        <form onSubmit={handleLoad} >
        
            <div className='Username'>
            <label>Nome completo:</label>
            <input type="text" placeholder="Nome completo" onChange={(e) =>[setUsername(e.target.value), setError("")]} />
        
            <FaUser className='icon'/>

            </div>
            
            <div className='E-mail'>
            <label>E-mail:</label>
            <input type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]} />
            <FaEnvelope className='icon' />
            </div>


            <div className='Telefone'>
              <label>Telefone/celular:</label>
            <input type='tel' name='telefone' placeholder='(00) 00000-0000' onChange={(e) => [setTelefone(e.target.value), setError("")]} pattern="\(\d{2}\)\s\d{5}-\d{4"  maxLength={'11'}/>

            <FaPhone className='icon'/>
            
            </div>

            
            <div className='DtNasc'>
            <label>Data de nascimento:</label>
            <input type='date' name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} max={maxDate}    />

            <FaCalendarAlt className='icon'/>
            </div>
            

            <div className='Senha'>
            <label>Senha:</label>
            <input type="password"
          placeholder="Digite sua Senha"
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]} />
          <FaLock className='icon'/>
            </div>
  
            
            <div className='ConfirmeSenha'>
            <label>Confirme sua senha:</label>
            <input type="password"
          placeholder="Confirme sua senha"
          value={Confirmpassword}
          onChange={(e) => [setConfirmPassword(e.target.value), setError("")]} />
            <FaLock className='icon'/>
            
            <labelError>{error}</labelError>

            <button type='submit' className='botao-inscrever-se' onClick={handleCadastro} >Inscrever-se</button>
            </div>

            

              

        </form>


    </div>
  )
}

export default Cadastro




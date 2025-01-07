import React from 'react'
import './Agendamentos.css'
import Odontologia from './Odontologia/Odontologia'
import Psicologia from './Psicologia/Psicologia'
import Button from '../Button/Button'
import { useNavigate } from "react-router-dom";
import ClinicaEscola from '../img/logoClinicaEscola.png'
import Agendamento2 from  '../img/Psicologia-Agendamento7.png'
import limpar from '../img/limpar (1).png'
const Agendamentos = () => {
    
    const navigate = useNavigate(); 

  return (
    <div>

<div className='Agendamento-logo'>
<img src={ClinicaEscola} alt='logoClinicaEscola' />
<h4>Clínicas UNINASSAU Paulista</h4>
<p>Selecione a consulta:</p>

</div>

<div className='Agnd-Odont'>
<button className='button-Odontologia' onClick={() => { navigate('/Odontologia') }}>Odontologia</button>
<img src={limpar}/>
</div>

<div className='Agnd-Psico'>
<button className='button-Psicologia' onClick={() => { navigate('/Psicologia') }}>Psicologia</button>
<img src={Agendamento2}/>
</div>



    </div>
  )
}

export default Agendamentos

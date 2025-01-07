import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import './Psicologia.css'
import {FaCalendarAlt} from 'react-icons/fa';  
const Psicologia = () => {

 const navigate = useNavigate();
 
 const [SelectedConsultation, setSelectedConsultation] = useState("")
 const [SelectedTime, setSelectedTime] = useState ("")
 const [birthDate, setBirthDate] = useState('');

 const handleSelectChange = (e) => {
   setSelectedConsultation(e.target.value)
 }
 const handleSelectedDay = (e) => {
  setBirthDate (e.target.value)
 }
 const handleSelectedTime = (e) => {
   setSelectedTime (e.target.value)
 }


 const handleSubmit = (e) => {
   e.preventDefault()
   console.log('Consulta Selecionada: ',SelectedConsultation)
   console.log('Dia Selecionado: ',birthDate)
   console.log('Horário Selecionado: ',SelectedTime)
   
   if(!SelectedConsultation|!birthDate|!SelectedTime ){
    alert("Preencha todos os formulários!")
    return
  }
  else{
    alert("Consulta agendada com sucesso!")
    navigate('/PgInicial')
  }
 }


  return (
    <div >

      <>

    <div className='agnd-psico'>  
    <h2>Agendamento Psicologia</h2>
    </div>
    <div className='container3'>

    <div className='formulario'>

    <Form onSubmit={handleSubmit}>

    <div>
        <p>Selecione a consulta:</p>
      <Form.Select value={SelectedConsultation} onChange={handleSelectChange}>
        <option>Selecione a consulta</option>
        <option>Psicoterapia infantil</option>
        <option>Psicoterapia individual </option>
        <option>Avaliação</option>
        <option>Psicoterapia familiar</option>
        <option>Transtornos específicos</option>
        <option>Aconselhamento psicológico</option>
      </Form.Select>
      <br />
      </div>

  
      <div className='Calendar'>
            <label>Selecione o dia:</label>
            <input type='date' name='birthDate' value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>

      </div>
    
      <br />
      

    <div>
      <p>Selecione o horário:</p>
      <Form.Select value={SelectedTime} onChange={handleSelectedTime}>
        <option>Selecione o horário:</option>
        <option>08:00</option>
        <option>09:00</option>
        <option>10:00</option>
        <option>11:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>15:00</option>
        <option>16:00</option>
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
      </Form.Select>
      <br />

      <button className='enviar' type='Submit' variant="primary">Enviar</button>

      </div>

      </Form>
    </div>

    </div>
    

    </> 
    




    </div>
  )
}

export default Psicologia

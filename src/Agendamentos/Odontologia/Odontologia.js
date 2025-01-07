import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import './Odontologia.css'


const Odontologia = () => {

    const navigate = useNavigate();

    const [SelectedConsultation, setSelectedConsultation] = useState("")
    const [birthDate, setBirthDate] = useState('');
    const [SelectedTime, setSelectedTime] = useState ("")
    
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
    <>

    <div className='agnd-odonto'>  
    <h2>Agendamento Odontologia</h2>
    </div>
    <div className='container3'>

    <div className='formulario'>

    <Form onSubmit={handleSubmit}>
    <div>
     
        <p>Selecione a consulta:</p>
      <Form.Select value={SelectedConsultation} onChange={handleSelectChange}>
        <option>Selecione a consulta</option>
        <option>Cirurgia</option>
        <option>Dentística </option>
        <option>Endodontia</option>
        <option>Odontopediatria</option>
        <option>Periodontia</option>
        <option>Prótese</option>
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

      <button  className='enviar'type="submit" variant="primary">Enviar</button>

      </div>
      </Form>

    </div>

    </div>
    

    </>
  )
}

export default Odontologia

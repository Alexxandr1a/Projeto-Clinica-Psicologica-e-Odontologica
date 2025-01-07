import React from 'react'
import odontopediatriaCard from '../img/odontopediatriaCard.png'
import Card from 'react-bootstrap/Card';
import './Odontope.css'

const Odontopediatria = () => {
  return (
    <div>
      
      <Card className='d-block'  id='card-odontope'>
        <Card.Img variant="top" src={odontopediatriaCard}  className='imagem-odontope'/>
        <Card.Body>
          <Card.Title>Odontopediatria</Card.Title>
          <Card.Text>
          Especialidade da odontologia voltada para o atendimento de crianças, desde os primeiros meses de vida até a adolescência. O principal objetivo dessa área é prevenir, diagnosticar e tratar problemas bucais nas fases iniciais de desenvolvimento, garantindo uma saúde oral adequada desde cedo.
          </Card.Text>
        </Card.Body>
    
      </Card>
      
    </div>
  )
}

export default Odontopediatria

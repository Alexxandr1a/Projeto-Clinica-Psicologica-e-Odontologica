import React from 'react'
import endodontiaCard from '../img/endodontiaCard.png'
import Card from 'react-bootstrap/Card';
import './Endodontia.css'
const Endodontia = () => {
  return (
    <div>
      <Card className='d-block' id='card-endodontia'>
        <Card.Img variant="top" src={endodontiaCard} className='imagem-endodontia'/>
        <Card.Body>
          <Card.Title>Endodontia</Card.Title>
          <Card.Text>
          Área da odontologia especializada no tratamento da parte interna dos dentes, mais especificamente da polpa dental, que contém nervos e vasos sanguíneos. O procedimento mais comum nessa especialidade é o tratamento de canal, que é necessário quando a polpa do dente está inflamada ou infectada, geralmente devido a cáries profundas, traumas ou fraturas.
          </Card.Text>
        </Card.Body>
      </Card> 
    </div>
  )
}

export default Endodontia

import React from 'react'
import './Individual.css'
import Card from 'react-bootstrap/Card';
import individualCard from '../img/individualCard.png'

//Segundo Card
const Individual = () => {
  return (
    <div>
       <Card className='d-block' id='card-individual'>
        <Card.Img variant="top" src={individualCard} className='imagem-individual' />
        <Card.Body>
          <Card.Title>Terapia Individual</Card.Title>
          <Card.Text>
         <p>A terapia individual é um processo terapêutico no qual uma pessoa trabalha diretamente com um psicólogo para abordar questões pessoais, emocionais ou comportamentais. Durante as sessões, o terapeuta ajuda o paciente a identificar padrões de comportamento, compreender suas emoções e desenvolver estratégias para enfrentar desafios como estresse, ansiedade, depressão, problemas de relacionamento, traumas, entre outros. </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Individual

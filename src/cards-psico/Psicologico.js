import React from 'react'
import './Psicologico.css'
import Card from 'react-bootstrap/Card';
import psicologicoCard from '../img/psicologicoCard.png'

//Sexto Card
const Psicologico = () => {
  return (
    <div>
      <Card className='d-block' id='card-psicologico'>
        <Card.Img variant="top" src={psicologicoCard} className='imagem-psicologico' />
        <Card.Body>
          <Card.Title>Aconselhamento Psicológico</Card.Title>
          <Card.Text>
         <p>A área de aconselhamento psicológico é voltada para o apoio e orientação de pessoas que enfrentam desafios emocionais, pessoais ou relacionais. Diferente de psicoterapias mais profundas, o aconselhamento psicológico foca em questões mais imediatas e pontuais, como dificuldades no trabalho, estresse, conflitos familiares ou de relacionamento, transições de vida, entre outros. </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Psicologico

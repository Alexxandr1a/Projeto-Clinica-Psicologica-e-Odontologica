import React from 'react'
import Card from 'react-bootstrap/Card';
import terapiaInfantil from '../img/terapiaInfantil.png'
import './Infantil.css'

//Primeiro Card
const infantil = () => {
  return (
    <div>
        <Card className='d-block' id='card-infantil'>
        <Card.Img variant="top" src={terapiaInfantil} className='imagem-infantil' />
        <Card.Body>
          <Card.Title>Terapia Infantil</Card.Title>
          <Card.Text>
         <p>Processo de acompanhamento especializado voltado para o desenvolvimento emocional e comportamental de crianças. O psicólogo utiliza técnicas lúdicas, como brincadeiras, desenhos e jogos, para ajudar a criança a expressar seus sentimentos e lidar com questões que podem estar impactando seu bem-estar.</p>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default infantil

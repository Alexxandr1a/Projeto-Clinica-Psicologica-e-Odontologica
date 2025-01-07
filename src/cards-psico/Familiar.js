import React from 'react'
import './Familiar.css'
import Card from 'react-bootstrap/Card';
import familiarCard from '../img/familiarCard.png'


//Quarto Card
const Familiar = () => {
  return (
    <div>
      <Card className='d-block' id='card-familiar'>
        <Card.Img variant="top" src={familiarCard} className='imagem-familiar' />
        <Card.Body>
          <Card.Title>Psicoterapia Familiar</Card.Title>
          <Card.Text>
         <p>
         A psicoterapia familiar é uma terapia que envolve todos os membros da família para melhorar a comunicação, fortalecer vínculos e resolver conflitos que afetam o bem-estar familiar. O terapeuta atua como mediador, ajudando a identificar padrões de comportamento disfuncionais e promover interações mais saudáveis e colaborativas.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Familiar

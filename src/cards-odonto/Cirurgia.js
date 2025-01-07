import React from 'react'
import cirurgiaCard from '../img/cirurgiaCard.png'
import Card from 'react-bootstrap/Card';
import './Cirurgia.css'

const Cirurgia = () => {
  return (
    <div>
      
      <Card className='d-block ' id='card-cirurgia'>
        <Card.Img variant="top" src={cirurgiaCard} className='imagem-cirurgia' />
        <Card.Body>
          <Card.Title>Cirurgia</Card.Title>
          <Card.Text>
         <p>Procedimento realizado para tratar condições que não podem ser resolvidas por meio de tratamentos convencionais, como restaurações ou limpezas. Os tipos mais comuns de cirurgias incluem extrações dentárias (como a retirada de dentes do siso), cirurgias para corrigir problemas gengivais (como a gengivoplastia) e implantes dentários, que substituem dentes perdidos por próteses fixas.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cirurgia

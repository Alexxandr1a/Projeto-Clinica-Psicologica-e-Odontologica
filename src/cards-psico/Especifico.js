import React from 'react'
import './Especifico.css'
import Card from 'react-bootstrap/Card';
import especificoCard from '../img/especificoCard.png'

//Quinto Card
const Especifico = () => {
  return (
    <div>
        <Card className='d-block' id='card-especifico'>
        <Card.Img variant="top" src={especificoCard} className='imagem-especifico' />
        <Card.Body>
          <Card.Title>Transtornos Específicos</Card.Title>
          <Card.Text>
         <p>
         A área de transtornos específicos na psicologia foca no estudo, diagnóstico e tratamento de condições que afetam aspectos particulares do comportamento, cognição e emoções. Esses transtornos incluem, por exemplo, ansiedade, depressão, transtorno obsessivo-compulsivo (TOC), transtornos de aprendizagem (como dislexia e TDAH) e fobias específicas. </p>
          </Card.Text>
        </Card.Body>
      </Card>
      
    </div>
  )
}

export default Especifico

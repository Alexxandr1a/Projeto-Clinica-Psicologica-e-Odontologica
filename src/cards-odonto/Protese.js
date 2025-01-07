import React from 'react'
import proteseCard from '../img/proteseCard.png'
import Card from 'react-bootstrap/Card';
import './Protese.css'

const Protese = () => {
  return (
    <div>
       <Card className='d-block' id='card-protese'>
        <Card.Img variant="top" src={proteseCard} className='imagem-protese'/>
        <Card.Body>
          <Card.Title>Prótese</Card.Title>
          <Card.Text>
          especialidade da odontologia que se dedica à reabilitação de dentes perdidos ou gravemente danificados, devolvendo tanto a estética quanto a função mastigatória. Existem diversos tipos de próteses, cada uma adequada a diferentes necessidades: Prótese total (dentadura), Prótese parcial removível, Prótese fixa e Prótese sobre implante.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  )
}

export default Protese

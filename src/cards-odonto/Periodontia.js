import React from 'react'
import cardOdonto from '../img/cardOdonto.png'
import Card from 'react-bootstrap/Card';
import './Periodontia.css'

const Periodontia = () => {
  return (
    <div>
      <Card className='d-block ' id='card-periodontia'>
        <Card.Img variant="top" src={cardOdonto} className='imagem-periodontia'/>
        <Card.Body>
          <Card.Title>Periodontia</Card.Title>
          <Card.Text>
          especialidade odontológica que trata das estruturas de suporte dos dentes, como gengivas, osso alveolar e ligamentos periodontais. O foco dessa área é a prevenção, diagnóstico e tratamento de doenças periodontais, como a gengivite e a periodontite. Os tratamentos incluem desde limpezas profundas, como a raspagem e alisamento radicular. 
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Periodontia

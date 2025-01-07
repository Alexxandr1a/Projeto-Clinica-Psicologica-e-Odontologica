import React from 'react'
import Card from 'react-bootstrap/Card';
import dentisticaCard from '../img/dentisticaCard.png'
import './Dentistica.css'
const Dentistica = () => {
  return (
    <div>
          <Card className='d-block ' id='card-dentistica'>
        <Card.Img variant="top" src={dentisticaCard}  className='imagem-dentistica'/>
        <Card.Body>
          <Card.Title>Dentística</Card.Title>
          <Card.Text>
            <p>Área responsável pela estética e pela restauração dos dentes, visando tanto a saúde bucal quanto a aparência do sorriso. Ela engloba procedimentos como restaurações de cáries, reconstrução de dentes quebrados, clareamento dental e aplicação de facetas de porcelana.  </p>
          </Card.Text>
        </Card.Body>
      
      </Card>
    </div>
  )
}

export default Dentistica

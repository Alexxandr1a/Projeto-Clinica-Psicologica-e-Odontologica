import React from 'react'
import Card from 'react-bootstrap/Card';
import './Avaliacao.css'
import avaliacaoCard from '../img/avaliacaoCard.png'
//Terceiro Card
const Avaliacao = () => {
  return (
    <div>
      <Card className='d-block' id='card-avaliacao'>
        <Card.Img variant="top" src={avaliacaoCard} className='imagem-avaliacao' />
        <Card.Body>
          <Card.Title>Avaliação</Card.Title>
          <Card.Text>
         <p>
         A avaliação psicológica é um processo estruturado em que o psicólogo coleta informações sobre o funcionamento emocional, comportamental e cognitivo de uma pessoa, com o objetivo de compreender melhor suas características, necessidades e dificuldades. Essa avaliação é realizada por meio de entrevistas, testes padronizados, questionários e observações, sendo adaptada conforme a idade e o contexto do paciente.</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Avaliacao

import React, { useRef, useState, useEffect } from 'react'
import './PgInicial.css'
import { useNavigate } from "react-router-dom";
import  logo from '../img/nassau.png'
import { motion } from 'framer-motion'
import { FaPhoneVolume, FaInstagram, FaCircleInfo } from "react-icons/fa6";
import { BiExit } from "react-icons/bi";
import Dente from '../img/logo-dente.png'
import Cerebro from '../img/cerebro-logo.png'
import Carousel from 'react-bootstrap/Carousel';
import carrossel1 from '../img/carrossel1.png'
import carrossel2 from '../img/carrossel2.png'
import carrossel3 from '../img/carrossel3.png'
import carrossel4 from '../img/carrossel4.png'
import Cirurgia from '../cards-odonto/Cirurgia';
import Dentistica from '../cards-odonto/Dentistica'
import Endodontia from '../cards-odonto/Endodontia'
import Odontopediatria from '../cards-odonto/Odontopediatria'
import Periodontia from '../cards-odonto/Periodontia'
import Protese from '../cards-odonto/Protese'
import Infantil from '../cards-psico/Infantil'
import Individual from '../cards-psico/Individual'
import Avaliacao from '../cards-psico/Avaliacao'
import Familiar from '../cards-psico/Familiar'
import Especifico from '../cards-psico/Especifico';
import Psicologico from '../cards-psico/Psicologico';
import ClinicaEscola from  '../img/logoClinicaEscola.png'
import blocoC from '../img/BlocoC.jpeg'
import Button from '../Button/Button';


const PgInicial = () => {
  const navigate = useNavigate();

  const [addCirurgiaVisible,setAddCirurgiaVisible] = useState(false)
  const [addDentisticaVisible,setAddDentisticaVisible] = useState(false)
  const [addEndodontiaVisible,setAddEndodontiaVisible] = useState(false)
  const [addOdontopedVisible,setAddOdontopedVisible] = useState(false)
  const [addPeriodontiaVisible,setAddPeriodontiaVisible] = useState(false)
  const [addProteseVisible,setAddProteseVisible] = useState(false)

  const handleAddCirurgiaClick = () => {
    setAddCirurgiaVisible(true)
      setAddDentisticaVisible(false)
      setAddEndodontiaVisible(false)
      setAddOdontopedVisible(false)
      setAddPeriodontiaVisible(false)
      setAddProteseVisible(false)  
  }
  const handleAddDentisticaClick = () => {
    
    setAddDentisticaVisible(true)
    setAddCirurgiaVisible(false)
    setAddEndodontiaVisible(false)
    setAddOdontopedVisible(false)
    setAddPeriodontiaVisible(false)
    setAddProteseVisible(false)
  
  }

  const handleaddEndodontiaClick = () =>{
    setAddCirurgiaVisible(false)
    setAddDentisticaVisible(false)
    setAddEndodontiaVisible(true)
    setAddOdontopedVisible(false)
    setAddPeriodontiaVisible(false)
    setAddProteseVisible(false)
  }
  const handleAddOdontopedClick = () =>{
    setAddCirurgiaVisible(false)
    setAddDentisticaVisible(false)
    setAddEndodontiaVisible(false)
    setAddOdontopedVisible(true)
    setAddPeriodontiaVisible(false)
    setAddProteseVisible(false)
  }

  const handleAddPeriodontiaClick = () =>{
    setAddCirurgiaVisible(false)
    setAddDentisticaVisible(false)
    setAddEndodontiaVisible(false)
    setAddOdontopedVisible(false)
    setAddPeriodontiaVisible(true)
    setAddProteseVisible(false)
  }
  const handleAddProteseClick = () => {
    setAddCirurgiaVisible(false)
    setAddDentisticaVisible(false)
    setAddEndodontiaVisible(false)
    setAddOdontopedVisible(false)
    setAddPeriodontiaVisible(false)
    setAddProteseVisible(true)
  }
//CARDS PSICOLOGIA//////////////////////////////////////////////////////

const [addInfantilVisible,setAddInfantilVisible] = useState(false)
  const [addIndividualVisible,setAddIndividualVisible] = useState(false)
  const [addAvaliacaoVisible,setAddAvaliacaoVisible] = useState(false)
  const [addFamiliarVisible,setAddFamiliarVisible] = useState(false)
  const [addEspecificoVisible,setAddEspecificoVisible] = useState(false)
  const [addPsicologicoVisible,setAddPsicologicoVisible] = useState(false)

  const handleAddInfantilClick = () => {
    setAddInfantilVisible(true)
      setAddIndividualVisible(false)
      setAddAvaliacaoVisible(false)
      setAddFamiliarVisible(false)
      setAddEspecificoVisible(false)
      setAddPsicologicoVisible(false)  
  }
  const handleAddIndividualClick = () => {
    
    setAddInfantilVisible(false)
    setAddIndividualVisible(true)
    setAddAvaliacaoVisible(false)
    setAddFamiliarVisible(false)
    setAddEspecificoVisible(false)
    setAddPsicologicoVisible(false) 
  
  }

  const handleAddAvaliacaoClick = () =>{
    setAddInfantilVisible(false)
    setAddIndividualVisible(false)
    setAddAvaliacaoVisible(true)
    setAddFamiliarVisible(false)
    setAddEspecificoVisible(false)
    setAddPsicologicoVisible(false) 
  }
  const handleAddFamiliarClick = () =>{
    setAddInfantilVisible(false)
    setAddIndividualVisible(false)
    setAddAvaliacaoVisible(false)
    setAddFamiliarVisible(true)
    setAddEspecificoVisible(false)
    setAddPsicologicoVisible(false) 
  }

  const handleAddEspecificoClick = () =>{
    setAddInfantilVisible(false)
    setAddIndividualVisible(false)
    setAddAvaliacaoVisible(false)
    setAddFamiliarVisible(false)
    setAddEspecificoVisible(true)
    setAddPsicologicoVisible(false) 
  }
  const handleAddPsicologicoClick = () => {
    setAddInfantilVisible(false)
    setAddIndividualVisible(false)
    setAddAvaliacaoVisible(false)
    setAddFamiliarVisible(false)
    setAddEspecificoVisible(false)
    setAddPsicologicoVisible(true) 
  }




  return (
    <div>

      <header>

        <div className='conatiner3'>

          <nav>

            <div className='simbolo'>

              <img src={logo} alt="Logo" className='Nassau' />
              <h1 className='clnc'>Clínica Uninassau </h1>
              <p className='paciente'>Área do paciente</p>

            </div>



            <div className='main-lista'>
              <ul className='ul'>

                <li><a href='#Sobre-Nos'><FaCircleInfo className='icones' />Sobre nós</a></li>
                <li><a href='https://www.instagram.com/clinicasuninassauplt ' target="_blank"><FaInstagram className='icones' />Rede social</a></li>
                <li><a href='#contact'><FaPhoneVolume className='icones' />Contato </a></li>
                <li><a href={'/'}><BiExit className='icones' />Sair</a></li>
                <li><button className='agendar-atendimento' onClick={() => { navigate('/Agendamentos') }}>Agendar Atendimento</button></li>

              </ul>

            </div>


          </nav>

        </div>

      </header>

      <main>

        <div className='container-main'>

   
          <div className='main-text'>

            <h2 className='titulo-pg-inicial'>Bem-vindo a Clínica Uninassau</h2>
            <p className='text'> Na nossa clínica, oferecemos uma abordagem integrada para cuidar da sua saúde, unindo serviços de odontologia e psicologia em um único lugar. Com uma equipe de profissionais e alunos qualificados e um ambiente acolhedor, nosso objetivo é promover o bem-estar físico e mental de nossos pacientes.
            </p>


          </div>

          <div className='main-img'>

            <img src={Dente} alt="Logo" className='Dente-logo' />
            <img src={Cerebro} alt="Logo" className='Cerebro-logo' />

          </div>

        </div>
        
      </main>

<div className='container-carrosseis'>

<div className='carrosseis'>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={carrossel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='carrossel-texto'>Atendimento de qualidade 👩🏽‍⚕️</h5>
          <p className='carrossel-texto'>Nossa prioridade sempre será entregar um serviço com excelência</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100"
          src={carrossel2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='carrossel-texto'>Estrutura de primeira linha 🏥 </h5>
          <p className='carrossel-texto'>Clínicas contemporâneas e dotadas com tecnologia de qualidade para proporcionar um ambiente seguro e receptivo para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
             className="d-block w-100"
          src={carrossel3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='carrossel-texto'>Conexão com a sociedade 👨‍👩‍👧‍👦</h5>
          <p className='carrossel-texto'>
          As clínicas escolares proporcionam serviços que satisfazem as necessidades da comunidade e auxiliam na preparação de profissionais engajados com a comunidade.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
             className="d-block w-100"
          src={carrossel4}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='carrossel-texto'>Preços acessíveis 💰</h5>
          <p className='carrossel-texto'>
          As clínicas-escola proporcionam serviços acessíveis e, em algumas situações, gratuitos, possibilitando que um maior número de pessoas possa ter acesso a um atendimento de alta qualidade.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  
</div>

<div className='serviços-disponiveis'>
<h1>Serviços disponíveis</h1>
<p>entenda um pouco sobre cada serviço oferecido</p>
</div>

<div className='container-servicos'>
  
<div className='Serviço-Odonto'>

<h1>Odontologia:</h1>


<ul className='lista-Odonto'>
  <li><button className='button-odonto' onClick={handleAddCirurgiaClick}>Cirurgia</button></li>{addCirurgiaVisible && <Cirurgia/>}
  <li><button className='button-odonto' onClick={handleAddDentisticaClick}>Dentística</button></li>{addDentisticaVisible && <Dentistica/>}
  <li><button className='button-odonto'  onClick={handleaddEndodontiaClick}>Endodontia</button></li>{addEndodontiaVisible && <Endodontia/>}
  <li><button className='button-odonto'  onClick={handleAddOdontopedClick}>Odontopediatria</button></li>{addOdontopedVisible && <Odontopediatria/>}
  <li><button className='button-odonto'  onClick={handleAddPeriodontiaClick}>Periodontia</button> </li>{addPeriodontiaVisible && <Periodontia/>}
  <li><button className='button-odonto' onClick={handleAddProteseClick}>Prótese</button> </li>{addProteseVisible && <Protese
  />}
 
</ul>

</div>

<div className='Serviço-Psico'>

<h1>Psicologia:</h1>


<ul className='lista-psico'>
  <li><button className='button-psico'onClick={handleAddInfantilClick}>Psicoterapia infantil</button></li>{addInfantilVisible && <Infantil/>}
  <li><button className='button-psico'onClick={handleAddIndividualClick}>Psicoterapia individual</button></li>{addIndividualVisible && <Individual/>}
  <li><button className='button-psico' onClick={handleAddAvaliacaoClick}>Avaliação</button></li>{addAvaliacaoVisible && <Avaliacao/>}
  <li><button className='button-psico'onClick={handleAddFamiliarClick}>Psicoterapia familiar</button></li>{addFamiliarVisible && <Familiar/>}
  <li><button className='button-psico'onClick={handleAddEspecificoClick}>Transtornos específicos</button></li>{addEspecificoVisible && <Especifico/>}
  <li><button className='button-psico'onClick={handleAddPsicologicoClick}>Aconselhamento psicológico</button></li>{addPsicologicoVisible && <Psicologico/>}
 
</ul>

</div>

</div>


<section className='clinica-escola'>

<div className='clinica-escola-text'>
<h1>Clínicas escolas integradas</h1>
Onde aprendizado e cuidado se unem para promover saúde e bem-estar com excelência e dedicação.
</div>
 
<div className='clinica-escola-logo'>
<img src={ClinicaEscola} alt='logoClinicaEscola' className='logo-clinica-escola'></img>
</div>

</section>


<section className='sobre-nos' id='Sobre-Nos'>

    <div className='container-about'>
      <div className='img-uninassau'>
        <img src={blocoC} alt='Uninassau Bloco C'/>
      </div>
      <div className='about-text'>
        <h2>Sobre Nós</h2>
        <p>A Clínica Escola da Uninassau conta com instalações modernas e equipamentos  tecnologicos, oferecendo uma formação prática de excelência para os alunos. Profissionais renomados da região orientam os estudantes, enquanto a clínica oferece atendimentos ao público nas áreas de Odontologia e Psicologia.
        </p>
      </div>

    </div>
    <div className='endereco-clinica'>
        <h2>Endereço</h2>
        <p><a href="https://www.google.com.br/maps/place/UNINASSAU+Paulista+-+Bloco+C/@-7.9381714,-34.8795713,173m/data=!3m1!1e3!4m14!1m7!3m6!1s0x7ab177397ca1355:0xf0598c0191f66127!2sUNINASSAU+Paulista+-+Bloco+C!8m2!3d-7.93798!4d-34.8794601!16s%2Fg%2F11vkgtdlmf!3m5!1s0x7ab177397ca1355:0xf0598c0191f66127!8m2!3d-7.93798!4d-34.8794601!16s%2Fg%2F11vkgtdlmf?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Rua do Rosarinho, 904 - Nobre, Paulista (PE)</a></p>
      </div>   
</section>



<footer>
    <div className='clinica-footer'>
  <h2>Clínica Uninassau</h2>
  <p>Sorriso e mente em harmonia. Cuidando da sua saúde de forma completa.</p>
  </div>

  <ul className='Links'>
    <h2><b>Links</b></h2>
    <li>Home</li>
    <li>Preços</li>
    <li>Sobre</li>
    <li>Serviços</li>
  </ul>
  
<ul className='segundo-Links'>
  <h2><b>Suporte</b></h2>
  <li>FAQ</li>
  <li>Como Funciona</li>
  <li>Características</li>
  <li id='contact'>Contato</li>

</ul>

<ul className='terceiro-Links'>
  <h2><b>Entre em contato</b></h2>
  <p>hello@reallygreatsite.com</p>
  <p>(81) 2121-5907</p>

</ul>

</footer>



    </div>


  )
}

export default PgInicial

import './Home.css';
import React from 'react';
import logo from '../img/nassau.png'
import dente from '../img/dente.png'
import cerebro from '../img/cerebro.png'
import Button from '../Button/Button'

function Home() {
  return (

    <div className="Home">
 
     <header className="Home-header">
    
     <Button />



  <h1 className='ClinicaNassau'>Clínica Uninassau</h1>


    
<img src={logo} alt="Logo" className='Nassau' />

<img src={dente} alt="Odontologia" className='dente' />

<img src={cerebro} alt="Psicologia" className='cerebro' />

<p className='odontologia'>Odontologia</p>
<p className='psicologia'>Psicologia</p>

<h5 className='EntreEmContato'>Fale conosco:</h5>

<p className='Email'>Email:</p>
<p className='gmail'>hello@reallygreatsite.com</p>

<p className='Fone'>Contato:</p>
<p className='numero'>(123) 456-7890</p>

<p className="LocalDaClinica">Local da Clínica:</p>
<p><a className="link" href="https://www.google.com.br/maps/place/UNINASSAU+Paulista+-+Bloco+C/@-7.9381714,-34.8795713,173m/data=!3m1!1e3!4m14!1m7!3m6!1s0x7ab177397ca1355:0xf0598c0191f66127!2sUNINASSAU+Paulista+-+Bloco+C!8m2!3d-7.93798!4d-34.8794601!16s%2Fg%2F11vkgtdlmf!3m5!1s0x7ab177397ca1355:0xf0598c0191f66127!8m2!3d-7.93798!4d-34.8794601!16s%2Fg%2F11vkgtdlmf?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank">
  UNINASSAU Paulista - Bloco C</a></p>

      </header>

      
    </div>
  );
}

export default Home;

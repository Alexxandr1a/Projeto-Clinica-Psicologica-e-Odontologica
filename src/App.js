import './App.css';
import { Fragment } from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';
import Cadastro from './Cadastro/Cadastro';
import PgInicial from './PaginaInicial/PgInicial';
import Psicologia from './Agendamentos/Psicologia/Psicologia';
import Odontologia from './Agendamentos/Odontologia/Odontologia'
import Agendamentos from './Agendamentos/Agendamentos';

const Private = ({Item}) =>{
  
  const signed =  true;

  return signed > 0 ? <Item/> : <Login/>
}

function App() {
  return (

    <div className="App">

      <header className="App-header">

      
    <ul className='Home'>
      <Link to='/'></Link>
      
    </ul>
      
        <Routes>
          
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Login" element={<Login />}></Route>
          <Route exact path="/*" element={<Home />}></Route>
          <Route exact path="/Cadastro" element={<Cadastro />}></Route>
          <Route exact path="/PgInicial" element={<Private Item={PgInicial}/>}></Route>
          <Route exact path="/Agendamentos" element={<Agendamentos />}></Route>
          <Route exact path="/Odontologia" element={<Odontologia />}></Route>
          <Route exact path="/Psicologia" element={<Psicologia />}></Route>
          
          
        </Routes>
        

       


      </header>


    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import { Fragment } from "react";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Cadastro from './Cadastro/Cadastro';
import Login from './Login/Login';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';


const root = createRoot(document.querySelector("#root"));


root.render(<App />);

root.render(

<BrowserRouter>
<Fragment>
<App />
</Fragment>
</BrowserRouter>
    
 
);

reportWebVitals();

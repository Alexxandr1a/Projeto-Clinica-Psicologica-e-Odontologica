import React from "react";
import'./Button.css'
import{useNavigate} from 'react-router-dom'

function Button (){

    
const button = ({ Text, onClick, Type = "button" }) => {
    return (
      <button type={Type} onClick={onClick}>
        {Text}
      </button>
    );
  };
  

    const navigate = useNavigate();
  
    
    return(
       
        
        <div>
            
            <button  onClick={()=> {navigate('/Login')}} className="btn-gradiente">Agende sua consulta</button>

             
        </div>
        
       
    )
        
        

}

export default Button;
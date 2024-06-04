import React from 'react';
import './style.css';
import Topotwo from '../../Componentes/Topotwo';
import {Link} from 'react-router-dom';


function Redefinicao(){
  return(
    <div className='tudl'>
      <Topotwo/>
    <div className='caixa-cadastral'> 
    <div className='campo-textl'>
     
    
     <div className='campo-textol'>
         <label> Informe seu e-mail para contato </label>
         <input type='email' nome='e-mail' placeholder = 'E-mail'/>
          </div>
 

       <div className='campo-texto-menorl'>
         <label>  Nova senha </label>
         <input type='password' nome='Senha' placeholder = 'Defina sua senha de acesso '/>
           </div>

        <div className='campo-texto-menorl'>
         <label> Confirmar senha </label>
         <input type='password' nome='Senha' placeholder = 'confirme senha '/>
           </div>

        
      
       </div>
       <Link to={'/login'}>
      <button id='btredefinir'>  
        Redefinir
        </button>
       </Link>
      
       </div>
         </div>
    
  );
}

export default Redefinicao;
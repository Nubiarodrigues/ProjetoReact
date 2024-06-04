import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import {Link} from 'react-router-dom';


function Configuracao(){
  return(
    <div className='tud'>
      <Topo/>
    <div className='caixa-cadastra'> 
    <div className='campo-text'>
     
    
     <div className='campo-texto'>
         <label> E-mail </label>
         <input type='email' nome='e-mail' placeholder = 'E-mail'/>
          </div>
 

       <div className='campo-texto-menor'>
         <label>  Nova senha </label>
         <input type='password' nome='Senha' placeholder = 'Defina sua senha de acesso '/>
           </div>

        <div className='campo-texto-menor'>
         <label> Confirmar senha </label>
         <input type='password' nome='Senha' placeholder = 'confirme senha '/>
           </div>

        
      
       </div>
       <Link to={'/pagconta'}>
      <button id='btfinalizar'>  
        Atualizar
        </button>
       </Link>
      
       </div>
         </div>
    
  );
}

export default Configuracao;
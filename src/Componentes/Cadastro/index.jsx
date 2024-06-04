import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import {Link} from 'react-router-dom';


function Cadastro(){
  return(
    <div className='tudo'>
      <Topo/>
    <div className='caixa-cadastro'> 
    <div className='campo-text'>
     
    <div className='campo-texto'>
         <label> Nome </label>
         <input type='text' nome='e-mail' placeholder = 'Nome Completo'/>
          </div>

      
    
     <div className='campo-texto'>
         <label> E-mail </label>
         <input type='email' nome='e-mail' placeholder = 'E-mail'/>
          </div>


      
      
     
 
     <div className='campo-texto'>
         <label> CPF </label>
         <input type='tel' nome='e-mail' placeholder = 'Informe seu CPF'/>
          </div>
      

      
     
       <div className='campo-texto-menor'>
         <label> Data de Nascimento </label>
         <input type='date' nome='RG' placeholder = 'Data de Nascimento'/>
           </div>
         

       <div className='campo-texto-menor'>
         <label> Senha </label>
         <input type='password' nome='Senha' placeholder = 'Defina sua senha de acesso '/>
           </div>

        <div className='campo-texto-menor'>
         <label> Confirmar senha </label>
         <input type='password' nome='Senha' placeholder = 'confirme senha '/>
           </div>

        
       
        
        
       </div>
       <Link to={'/login'}>
      <button id='btfinalizar'>  
          Finalizar
        </button>
       </Link>
      
       </div>
         </div>
    
  );
}

export default Cadastro;
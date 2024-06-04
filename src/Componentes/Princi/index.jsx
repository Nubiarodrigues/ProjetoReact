import React from 'react';
import './style.css';
import Logo from '../../imagens/logo.png';
import {Link} from 'react-router-dom';

function Princi(){
  return(
    <div className='princi'>
       <img src={Logo} id='logo'/>
      <div className='botoes'>

        <Link to={'/quemsomos'}>
       <button id='btsomos'>
        Quem somos
        </button>
           </Link>
        
        <Link to={'/login'}>
        <button id='btacessar'>
          Acessar 
        </button>
           </Link>

         <Link to={'/cadastro'}>
        <button id='btabrirconta'>
          Abrir conta
        </button>
              </Link>

         <Link to={'/cartoes'}>
        <button id='btabrircartoes'>
          Cartões 
        </button>
               </Link>
          
  </div>
      
    </div>
    
  );
}


export default Princi;
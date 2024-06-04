import React from 'react';
import './style.css';
import Logo from '../../imagens/logo.png';
import {Link} from 'react-router-dom';

function Topo(){
  return(
    <div className='topo'>
    <div className='cabecalho'>
       <img src={Logo} id='logo'/>
          <Link to={'/pagconta'}>
       <button id='btvoltar'>
       Voltar
     </button>
         </Link>
    </div>
    
    </div>
      
  );
}

export default Topo;
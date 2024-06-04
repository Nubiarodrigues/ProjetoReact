import React from 'react';
import './style.css';
import Logo from '../../imagens/logo.png';
import {Link} from 'react-router-dom';

function Topotwo(){
  return(
    <div className='topotwo'>
    <div className='cabecalhotwo'>
       <img src={Logo} id='logo'/>
          <Link to={'/login'}>
       <button id='btvolta'>
       Voltar
     </button>
         </Link>
    </div>
    
    </div>
      
  );
}

export default Topotwo;
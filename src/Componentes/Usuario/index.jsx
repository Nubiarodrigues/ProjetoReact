import React from "react";
import "./style.css";
import Logo from '../../imagens/logo.png';
import Sair from '../../imagens/sair.png';
import {Link} from 'react-router-dom';

function Usuario({nome}){
  return(
    <div className="usuario">
        <img src={Logo} id='logo'/>
        <h1>Olá, {nome} </h1>
      
 <Link to={'/'}>
      <button id='btsair'>
        <img id='sair' src={Sair}/>
           <p>Sair</p> 
      </button>
        </Link>
    </div>
  );
}
export default Usuario;
import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import {Link} from 'react-router-dom';

function Login(){
  return(
    <div className='tido'>
   <Topo/>
    <div className='caixa-login'>
      <div className='campo'>
         <label> CPF </label>
         <input type='number' nome='cpf' placeholder = 'Informe seu CPF'/>
        </div>

    <div className='campo'>
      <label> Senha </label>
      <input type='password' nome='senha' placeholder = 'Informe sua senha de acesso'/>
      <div className='texto-um'>
        <Link to={'/Redefinicao'}>
      <p>Esqueci minha senha  </p>
          </Link>
        </div>
          </div>


       <Link to={'/pagconta'}>
      <button id='btlogar'>  
          Entrar
        </button>
          </Link>
      
      </div>
       </div>
  
    
  );
}

export default Login;
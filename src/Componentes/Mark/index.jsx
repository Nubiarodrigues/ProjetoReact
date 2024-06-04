import React from 'react';
import './style.css';
import Moca from '../../imagens/moca.png';
import {Link} from 'react-router-dom';

function Mark() {
  return(
    <div className='mark'>
       <div className='conteudo'>

 <div className='terceira-coluna'>
         <div className='roda-sub'>
      <h3>Rende mais que a poupança,
sem taxa de manutenção
nem tarifas ocultas</h3>
          <p>Cartão de crédito com anuidade zero. Conta digital e sem custos.
</p>
    </div>

             </div>
         


         
        <div className='primeira-coluna'>
      <h2>O banco de </h2>
          <h1> 2 milhões de pessoas </h1>
          <p>Conta digital,cartão de credito,investimento,tudo em um só banco </p>
            </div>


         

      <div className='segunda-coluna'>
          <img src={Moca} id='moca'/>
      </div>
      
         
     
     </div>
       </div>
 
  
  );
  
}

export default Mark;
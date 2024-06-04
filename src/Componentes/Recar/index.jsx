import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function recar() {
  return(
    <div className='pop'>
     <div className='campo-texto'>
       
         <label> Numero </label>
         <input tel='tel' nome='Numero' placeholder = 'informe o DDD'/>

       <div className='campo-texto'>
         <label> Valor da recarga </label>
         <input tel='tel' nome='Numero' placeholder = 'informe o valor'/>
         
         <Link to={'/pagconta'}>
       <button id='btvolta'>
         Finalizar
       </button>
           </Link>
         
          </div>
        </div>

    </div>
  )
  
}
export default recar;
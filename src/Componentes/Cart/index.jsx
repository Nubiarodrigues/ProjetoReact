import React from 'react';
import './style.css';
import Cartoesjun from '../../imagens/cartoesjun.png';
import {Link} from 'react-router-dom';

function Cart (){
  return(
    <div className='conteud-geral'>
      <div className='conteudo-sub'>
        
      <div className='coluna-um'>
        
        
      <p>😎Contactless  </p>
        
        <p>👩‍👩‍👦‍👦Cartão adicional</p>
        <p>📱 Cartão virtual  </p>
        <div className='coluna'>
           <p>🎁Cartão de Crédito B9  </p>
             </div>
      </div>

      <div className='coluna-dois'>
         <img src={Cartoesjun} id='cartoesjun'/>
        

      </div>
        </div>
    </div>
    
  );
}

export default Cart;
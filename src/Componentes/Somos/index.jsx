import React from 'react';
import './style.css';
import Sobrenos from '../../imagens/sobrenos.png';


function Somos (){
  return(
    <div className='pag-somos'>
      <div className='conteudo-somos'>
        <div className='primeira-coluna-somos'>
          <h1>Sobre o B9</h1>
          <p>O B9 nasceu em 2019 com a missão de facilitar a sua vida financeira,buscamos cada dia inovar nossos serviços para oferecer 
o melhor do mercado para nossos clientes </p>


          <div className='segunda-coluna-somos' >
          <h2> Nossos valores são a nossa identidade</h2>
          <p>&#187;Tecnologia</p>
          <p>&#187;Desing</p>
          <p>&#187;Experiência do Cliente</p>
             </div>
        </div>
        
        <div className='terceira-coluna-somos'>
          <img src={Sobrenos} id='sobrenos'/>
        </div>
      </div>
    </div>
    
  );
}

export default Somos;
import React,{useState,useEffect} from 'react';
//import React from 'react';
import './style.css';
import Oculta from '../../imagens/oculta.png';
//import {Link} from 'react-router-dom';

function Culta (){
   const[visivel, setVisivel]=useState(false);
  const[textoExtensao, setTextoExtensao]=useState('R$ 100');

   function expandir(){
     if(visivel){
       setVisivel(false);
       setTextoExtensao('R$ 100'); 
     }
     else{
       setVisivel(true);
       setTextoExtensao('***');    
     }
   }

  return(
    <div className='ocultacao'>
      <img src={Oculta} id='oculta'onClick={()=>expandir()}/>
    
     <p>Saldo</p>
     
      <div className='culta'>
          <h1>{visivel && <span> R$</span>}
          <span id='texto-expandir' onClick={()=>expandir()}> {textoExtensao} </span>   
            </h1>
      </div>
        </div>
      
   
      
  );
}

export default Culta;
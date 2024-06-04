import React,{useState,useEffect} from 'react';
import './style.css';
import Cartao from '../../imagens/cartao.png';
import Pix from '../../imagens/pix.png';
import Config from '../../imagens/config.svg';
import Recarga from '../../imagens/recarga.png';
import Sair from '../../imagens/sair.png';
import Ajuda from '../../imagens/ajuda.png';
import Extrato from '../../imagens/extrato.png';
import {Link} from 'react-router-dom';
import Pop from '../Pop';
import Recar from '../Recar';


function MenuRodape (){
   const[extrato,setextrato]=useState(false);
   const[chame,setchame]=useState(false);
  
   function expandir(){
     if(visivel){
       setVisivel(False);
     }
     else{
       setVisivel(True);
     }

    
   }

 
  
   function recarga (){
     if(visivel){
       setVisivel(False);
     }
     else{
       setVisivel(True);
     }
     
   }
  
  
  return(
    <div className='menu-rodape'>
      <div className='sup'>

      <button id='btpix'>
        <img id='pix' src={Pix}/>
        Pix
        </button>

      
      <button id='btcartao'>
        <img id='cartao' src={Cartao}/>
        Cartão 
      </button>

    
      <button id='btrecarga'>
        <img id='recarga' src={Recarga} onClick={()=>setechame(!chame)}/>
        Recarga 
      </button>
        {chame &&
        <Recar/>
      }
    onClick={()=>setextra(!extra)}/>
     
           
      <button id='btajuda'>
        <img id='ajuda' src={Ajuda}/>
            Ajuda
      </button>



      <Link to={'/configuraçao'}>
      <button id='btconfig'>
         <img id='config' src={Config}/>
             Configuraçoes
          </button>
        </Link>

        <div className='rodap'>
        <div className='extrato'>
          <button id='btextrato'>
        <img id='extrato' src={Extrato} onClick={()=>setextrato(!extrato)}/>
            </button>
        </div>
        </div>
        
     
        </div>
      {extrato &&
        <Pop/>
      }
    
    </div>
    
  );
}

export default MenuRodape;
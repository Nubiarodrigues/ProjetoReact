import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import MenuRodape from '../../Componentes/MenuRodape';
import Usuario from '../../Componentes/Usuario';
import Rodape from '../../Componentes/Rodape';
import Culta from '../../Componentes/Culta';
import Caxinha from '../../Componentes/Caxinha';
//import Pop from '../../Componentes/Pop';


function Pagconta (){
  return(
    <div className='pag-conta'>
        <MenuRodape/>
      <div className='corpo-pag-conta'> 
         <div className='cabecalho-pagina-principal'>
          <div id='usuario'>
        <Usuario nome='Sophia'/>
          
        <Rodape/>
            <Culta/>
            <Caxinha/>
     
         </div>

           
     
    
     
      
    </div>
    </div>
    </div>
  );
}

export default Pagconta;
import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import Cart from '../../Componentes/Cart';
import Rodape from '../../Componentes/Rodape';


function Paginacartao () {
  return(
    <div className='pagina-cartao'>
      
       <div className='pagina-cartao-dois'>
       <Topo/>  
         <Cart/>
        <Rodape/>
         
      </div>
      </div>

   



    
  );
  
}

export default Paginacartao;
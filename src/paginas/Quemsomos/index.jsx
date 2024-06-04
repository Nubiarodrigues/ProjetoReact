import React from 'react';
import './style.css';
import Topo from '../../Componentes/Topo';
import Somos from '../../Componentes/Somos';
function  Quemsomos(){
  return(
    <div className='quemsomos'>
      <Topo/>
      <Somos/>
      
    </div>
  )
}

export default Quemsomos;
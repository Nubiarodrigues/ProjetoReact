import React from 'react';
import './App.css';
import Topo from './Componentes/Topo';
import Topotwo from './Componentes/Topotwo';
import Pop from './Componentes/Pop';
import Recar from './Componentes/Recar';
import Culta from './Componentes/Culta';
import Login from './Componentes/Login';
import Caxinha from './Componentes/Caxinha';
import Rodape from './Componentes/Rodape';
import MenuRodape from './Componentes/MenuRodape';
import Princi from './Componentes/Princi';
import Mark from './Componentes/Mark';
import Cart from './Componentes/Cart';
import Usuario from './Componentes/Usuario';
import Cadastro from './Componentes/Cadastro';
import Configuracao from './Componentes/Configuracao';
import Redefinicao from './Componentes/Redefinicao';
import Paginaprincipal from './paginas/Paginaprincipal';
import Paginacartao from './paginas/Paginacartao';
import Quemsomos from './paginas/Quemsomos';
import Pagconta from './paginas/Pagconta';
// function App() {
//   return (
//     <div className='print'>
//       <Paginaprincipal/>
//     </div>

import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App(){
  return (
   
 
  <BrowserRouter>
    <Routes>
      <Route exact={true} path="/" element={<Paginaprincipal/>}/>
      <Route exact={true} path="/login" element={<Login/>}/>
      <Route exact={true} path="/cadastro" element={<Cadastro/>}/>
      <Route exact={true} path="/cartoes" element={<Paginacartao />}/>
      <Route exact={true} path="/pagconta" element={<Pagconta/>}/>
       <Route exact={true} path="/extrat" element={<Pop/>}/>
       <Route exact={true} path="/recar" element={<Recar/>}/>
      <Route exact={true} path="/configuraçao" element={<Configuracao/>}/>
        <Route exact={true} path="/Redefinicao" element={<Redefinicao/>}/>
      <Route exact={true} path="/quemsomos" element={<Quemsomos/>}/>
    </Routes>
  
  </BrowserRouter>
 );
}


export default App;
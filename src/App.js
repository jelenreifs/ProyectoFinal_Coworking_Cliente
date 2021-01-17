import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import feather  from 'feather-icons';
import Login from './componentes/login';
import Sidebar from "./componentes/sidebar";
import Cabecera from "./componentes/cabecera";
import Home from "./componentes/home";
import Reserva from "./componentes/reserva_puesto";
import RegistroUsuario from "./componentes/registro_user";
import ConfiguracionUsuario from "./componentes/config_user";


import './App.css';

function App() {
  const [sidebar, setSidebar] = useState("sidebar");
  const [ nav100, setNav100 ] = useState("navbar navbar-expand navbar-bg");

    const handleHamburger = (e) => { 
        e.preventDefault();
        if (sidebar === "sidebar") {
          setSidebar("sidebar collapsed");
          setNav100("navbar navbar-expand navbar-bg2")
        } else {
          setSidebar("sidebar");
           setNav100("navbar navbar-expand navbar-bg")
          }
    }
  


  return (
    <BrowserRouter>
      <Route exact path="/">
          <Login />
      </Route>
      
     <Route exact path="/home">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera cambiarSidebar={handleHamburger} navFlexible={ nav100 }/>
            <Home />
          </div>
        </div>
      </Route>

    <Route exact path="/reserva-puesto">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera cambiarSidebar={handleHamburger} navFlexible={ nav100 } />
            <Reserva />
          </div>
        </div>
      </Route>


    <Route exact path="/registro-usuario">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
             <Cabecera cambiarSidebar={handleHamburger} navFlexible={ nav100 } />
            <RegistroUsuario />
          </div>
        </div>
      </Route>

      <Route exact path="/configuracion-usuario">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
             <Cabecera cambiarSidebar={handleHamburger} navFlexible={ nav100 } />
            <ConfiguracionUsuario />
          </div>
        </div>
      </Route>
    

      </BrowserRouter>
  )
  
}

export default App;

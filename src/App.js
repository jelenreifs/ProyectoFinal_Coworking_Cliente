import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
//import feather  from 'feather-icons';
import Login from './componentes/login';
import Sidebar from "./componentes/sidebar";
import Cabecera from "./componentes/cabecera";
import Home from "./componentes/home";
import Reserva from "./componentes/reserva_puesto";
import ConfiguracionUsuario from "./componentes/config_user";
import AltaUsuario from "./componentes/alta_user";
import BajaUsuario from "./componentes/baja_user";
import Dashboard from "./componentes/dashboard";
import MisReservas from "./componentes/mis_reservas";


import './App.css';
import './componentes/Plano/plano.css';


function App() {
  const [sidebar, setSidebar] = useState("sidebar");
  const [nav100, setNav100] = useState("navbar navbar-expand navbar-bg");
  const [mensaje, setMensaje] = useState("");
  const [data, setData] = useState([]);
  const [logueado, setLogueado] = useState(false);
  const [administrador, setAdministrador] = useState(false);

  
/* Plano */
  const [puestoColor, setPuestoColor] = useState("st11");
  const [puestoId, setPuestoId] = useState("");
  

  const handlePuesto = (e) => { 
      e.preventDefault();
      if (puestoColor === "st11") {
        setPuestoColor("st11-ocupado")
      } else {
        setPuestoColor("st11")
      }
     setPuestoId(e.target.id)
  }



/* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

/* Sidebar */
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
  
  
  const loginUser = (email, password) => { 
        fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }),
    })
          .then(res => res.json())
         
          .then(res => {
            if (res.error === true) {
              setMensaje(res.mensaje)
              handleShow()
            
            } else {
              setMensaje("")
              setData(res.usuario)
              console.log(res)
              setLogueado(true)
              setAdministrador(res.usuario.administrador)
                console.log(res.usuario.administrador)
            }
        });
  }
 

  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login
          loginUser={loginUser}
          mensaje={mensaje}
          show={show}
          handleClose={handleClose}
          handleShow={handleShow}
          logueado={logueado}
          administrador={administrador}
          usuario={data}
        />
      </Route>
      
     <Route exact path="/home">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
            />
            <Home />
          </div>
        </div>
      </Route>

      <Route exact path="/home-admin">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
             <p> ADMINISTRADOR</p>
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
            />
            <Home />
          </div>
        </div>
      </Route>

    <Route exact path="/reserva-puesto">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
            />
            <Reserva
              puestoId={puestoId}
              puestoColor={puestoColor}
              handlePuesto={handlePuesto}
            />
          </div>
        </div>
      </Route>


    <Route exact path="/alta-usuario">
        <div className="wrapper">
         <Sidebar sidebar={sidebar} />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger} 
              navFlexible={nav100} />
            <AltaUsuario />
          </div>
        </div>
      </Route>


    <Route exact path="/baja-usuario">
        <div className="wrapper">
         <Sidebar sidebar={sidebar} />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger} 
              navFlexible={nav100} />
            <BajaUsuario />
          </div>
        </div>
      </Route>


      <Route exact path="/configuracion-usuario">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100} />
            <ConfiguracionUsuario />
          </div>
        </div>
      </Route>

      <Route exact path="/mis-reservas">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100} />
            <MisReservas />
          </div>
        </div>
      </Route>



    <Route exact path="/configuracion-usuario">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100} />
            <ConfiguracionUsuario />
          </div>
        </div>
      </Route>

          <Route exact path="/dashboard">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100} />
            <Dashboard />
          </div>
        </div>
      </Route>

      </BrowserRouter>
  )
  
}

export default App;

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
import RegistroUsuario from "./componentes/registro_user";
import ConfiguracionUsuario from "./componentes/config_user";


import './App.css';


function App() {
  const [sidebar, setSidebar] = useState("sidebar");
  const [nav100, setNav100] = useState("navbar navbar-expand navbar-bg");
  const [mensaje, setMensaje] = useState("");
  const [data, setData] = useState([]);
  const [logueado, setLogueado] = useState(false);
  const [administrador, setAdministrador] = useState(false);

  
  

/* Modal */
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  

/* History */
/* let history = useHistory();
const handleHome= () => history.push("/home"); */


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
              setLogueado(true)
              if (res.administrador === false) {
                setAdministrador(false)
              } else { 
                 setAdministrador(true)
              } 
                      
            } 
        
        });
   
  }
 
  


  return (
    <BrowserRouter>
      <Route exact path="/">
        <Login loginUser={loginUser} mensaje={mensaje} show={show} handleClose={handleClose} handleShow={handleShow} logueado={logueado} administrador={administrador}/>
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

      <Route exact path="/home-admin">
        <div className="wrapper">
          <Sidebar sidebar= { sidebar } />
          <div className="main">
             <p> ADMINISTRADOR</p>
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

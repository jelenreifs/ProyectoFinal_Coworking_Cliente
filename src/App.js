import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
//import feather  from 'feather-icons';
import Login from './componentes/login';
import Sidebar from "./componentes/sidebar";
import SidebarAdmin from "./componentes/sidebar_admin";
import Cabecera from "./componentes/cabecera";
import Home from "./componentes/home";
import HomeAdmin from "./componentes/home";
import ReservaPuesto from "./componentes/reserva_puesto";
import ConfiguracionUsuario from "./componentes/config_user";
import AltaUsuario from "./componentes/alta_user";
import BajaUsuario from "./componentes/baja_user";
import Dashboard from "./componentes/dashboard";
import MisReservas from "./componentes/mis_reservas";


import './App.css';
import './componentes/Plano/plano.css';


function App() {
  const [sidebar, setSidebar] = useState("sidebar");
  const [sidebarAdmin, setSidebarAdmin] = useState("sidebar");
  const [nav100, setNav100] = useState("navbar navbar-expand navbar-bg");
  const [mensaje, setMensaje] = useState("");
  const [logueado, setLogueado] = useState(false);
  const [administrador, setAdministrador] = useState(false);
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [sessionStorage, setSessionStorage] = useState("");
 



    /* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
 /* Plano */

 const [asientos, setAsientos] = useState([
    { id: "M1-1", estado: "libre" },
    { id: "M1-2", estado: "libre" },
    { id: "M1-3", estado: "libre" },
    { id: "M1-4", estado: "libre" },
    { id: "M1-5", estado: "libre" },
    { id: "M1-6", estado: "libre" },
    { id: "M2-1", estado: "libre" },
    { id: "M2-2", estado: "libre" },
    { id: "M2-3", estado: "libre" },
    { id: "M2-4", estado: "libre" },
    { id: "M2-5", estado: "libre" },
    { id: "M2-6", estado: "libre" },
    { id: "M3-1", estado: "libre" },
    { id: "M3-2", estado: "libre" },
    { id: "M3-3", estado: "libre" },
    { id: "M3-4", estado: "libre" },
    { id: "M3-5", estado: "libre" },
    { id: "M3-6", estado: "libre" },
    { id: "M4-1", estado: "libre" },
    { id: "M4-2", estado: "libre" },
    { id: "M4-3", estado: "libre" },
    { id: "M4-4", estado: "libre" },
    { id: "M4-5", estado: "libre" },
    { id: "M4-6", estado: "libre" },
    { id: "M5-1", estado: "libre" },
    { id: "M5-2", estado: "libre" },
    { id: "M5-3", estado: "libre" },
    { id: "M5-4", estado: "libre" },
    { id: "M5-5", estado: "libre" },
    { id: "M5-6", estado: "libre" },
    { id: "M6-1", estado: "libre" },
    { id: "M6-2", estado: "libre" },
    { id: "M6-3", estado: "libre" },
    { id: "M6-4", estado: "libre" },
    { id: "M6-5", estado: "libre" },
    { id: "M6-6", estado: "libre" },
    { id: "M7-1", estado: "libre" },
    { id: "M7-2", estado: "libre" },
    { id: "M7-3", estado: "libre" },
    { id: "M7-4", estado: "libre" },
    { id: "M7-5", estado: "libre" },
    { id: "M7-6", estado: "libre" },
    { id: "M7-7", estado: "libre" },
  ]);

    const manejarEstado = (e) => {
    const newArray = asientos.map((asiento) => {
      if (asiento.id === e.target.id && asiento.estado === "libre") {
        return { id: e.target.id, estado: "ocupado", nombre: dataUser.name };
      } else if (asiento.id === e.target.id && asiento.estado === "ocupado") {
        return { id: e.target.id, estado: "libre" };
      } else {
        return asiento;
      }
    });
    setAsientos(newArray);
  };



    /* Sidebar */
    const handleHamburger = (e) => {
      e.preventDefault();
      if (sidebar === "sidebar" && sidebarAdmin === "sidebar") {
        setSidebar("sidebar collapsed");
        setSidebarAdmin("sidebar collapsed");
        setNav100("navbar navbar-expand navbar-bg2")
      } else {
        setSidebar("sidebar");
        setSidebarAdmin("sidebar");
        setNav100("navbar navbar-expand navbar-bg")
      }
    }
  
  
/************************************************/
/*                   LOGIN                  */
/************************************************/
  
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
            setAdministrador(res.usuario.administrador)
           setSessionStorage(window.sessionStorage.setItem("usuario", "res.usuario"))
          
          }
        } )
    }

/************************************************/
/*               USUARIO LOGUEADO              */
/************************************************/
  

    useEffect(() => {
    fetch("/api/user")
     .then(res => res.json())
      .then(res => {
        setDataUser(res.usuario);
       });
    }, []);
  
  
  
 /************************************************/
/*               LOGOUT              */
/************************************************/


  const handleLogout = () => { 
    setLogueado(false)
    setDataUser([])
    setAdministrador("")
    setSessionStorage(window.sessionStorage.clear())
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
           { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado} /> :  <Sidebar sidebar= { sidebar }  logueado={logueado}/> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
               handleLogout={ handleLogout}
                
            />
            <Home
              logueado={logueado} />
          </div>
        </div>
      </Route>

      <Route exact path="/home-admin">
        <div className="wrapper">
           { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado}/> :  <Sidebar sidebar= { sidebar }  logueado={logueado} /> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout}
             
            />
            <HomeAdmin
                logueado={logueado} />
          </div>
        </div>
      </Route>

    <Route exact path="/reserva-puesto">
        <div className="wrapper">
           { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado}/> : <Sidebar sidebar= { sidebar }  logueado={logueado} /> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
          handleLogout={ handleLogout}
            />
            <ReservaPuesto
              asientos={asientos}
              manejarEstado={manejarEstado} 
              dataUser={dataUser}
                logueado={logueado}
            />
          </div>
        </div>
      </Route>


    <Route exact path="/alta-usuario">
        <div className="wrapper">
          <SidebarAdmin sidebar= { sidebar } logueado={logueado} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger} 
              navFlexible={nav100}
           
              handleLogout={ handleLogout}
            />
            <AltaUsuario
              logueado={logueado} />
          </div>
        </div>
      </Route>


    <Route exact path="/baja-usuario">
        <div className="wrapper">
          <SidebarAdmin sidebar= { sidebar }  logueado={logueado} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger} 
              navFlexible={nav100}
             handleLogout={ handleLogout}
            />
            <BajaUsuario
              logueado={logueado} />
          </div>
        </div>
      </Route>


      <Route exact path="/configuracion-usuario">
        <div className="wrapper">
              { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado} /> : <Sidebar sidebar= { sidebar }   logueado={logueado}/> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
          
              handleLogout={ handleLogout}
            
            />
            <ConfiguracionUsuario
              dataUser={dataUser}
                logueado={logueado}
            />
          </div>
        </div>
      </Route>

      <Route exact path="/mis-reservas">
        <div className="wrapper">
              { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado} /> : <Sidebar sidebar= { sidebar }   logueado={logueado}/> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout}
            />
            <MisReservas 
              dataUser={dataUser}
                logueado={logueado}
            />
          </div>
        </div>
      </Route>

 

    <Route exact path="/dashboard">
        <div className="wrapper">
           { data.administrador ? <SidebarAdmin sidebar= { sidebar }  logueado={logueado} /> : <Sidebar sidebar= { sidebar }   logueado={logueado}/> }
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
        
              handleLogout={ handleLogout}
            />
            <Dashboard
              logueado={logueado}/>
          </div>
        </div>
      </Route>
    </BrowserRouter>
  )
  
}

export default App;

import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import moment from 'moment';
//import { useHistory } from "react-router-dom";
import Login from './componentes/login';
import Sidebar from "./componentes/sidebar";
import Cabecera from "./componentes/cabecera";
import Home from "./componentes/home";
import HomeAdmin from "./componentes/home";
import ReservaPuesto from "./componentes/reserva_puesto";
import ConfiguracionUsuario from "./componentes/config_user";
import AltaUsuario from "./componentes/alta_user";
import BajaModifUsuario from "./componentes/baja-modif_user";
import Dashboard from "./componentes/dashboard";
import MisReservas from "./componentes/mis_reservas";
import ModificarUsuario from "./componentes/modificar_user";
import SidebarConfig from "./componentes/sidebar_config";


import './App.css';
import './componentes/Plano/plano.css';


function App() {
  const [sidebar, setSidebar] = useState("sidebar");
  const [sidebarAdmin, setSidebarAdmin] = useState("sidebar");
  const [nav100, setNav100] = useState("navbar navbar-expand navbar-bg");
  const [mensaje, setMensaje] = useState("");
  const [logueado, setLogueado] = useState(() => { 
    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    console.log(usuario)
    if (usuario === null) {
      return false
    } else { 
      return true
    }
  });
  const [administrador, setAdministrador] = useState(() => { 
    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    console.log(usuario)
    if (usuario === null) {
      return false
    } else { 
      return usuario.administrador
    }
  });
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState(() => { 
    const usuario = JSON.parse(sessionStorage.getItem("usuario"))
    console.log(usuario)
    if (usuario === null) {
      return []
    } else { 
      return usuario
    }
  }) ; 


/* Formateo de Fecha */
  const [daySelected, onChange] = useState(new Date());
  //const [date, setDate] = useState(new Date());

const diaSelect = moment(daySelected).format("DD/MM/YYYY")
//console.log(diaSelect)
  


    /* Modal */
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  

/************************************************/
/*                 PUESTOS                     */
/************************************************/
  
/* Array de asientos sin reservados */

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
    { id: "M8-1", estado: "libre" },
    { id: "M8-2", estado: "libre" },
    { id: "M8-3", estado: "libre" },
    { id: "M8-4", estado: "libre" },
    { id: "M8-5", estado: "libre" },
    { id: "M8-6", estado: "libre" },
    
 ]);
  
 
/* Array de asientos sin reservar */
 const [asientosLibres, setAsientosLibres] = useState([
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
    { id: "M8-1", estado: "libre" },
    { id: "M8-2", estado: "libre" },
    { id: "M8-3", estado: "libre" },
    { id: "M8-4", estado: "libre" },
    { id: "M8-5", estado: "libre" },
    { id: "M8-6", estado: "libre" },
    
 ]);
  
  
const [infoAsiento, setInfoAsiento] = useState("");
   
 
 /* Seleccíon de fecha, asiento para realiar la reserva */
    
  const manejarEstado = (e) => {
    setInfoAsiento(e.target.id)
    const newArray = asientos.map((asiento) => {
      if (asiento.id === e.target.id && asiento.estado === "libre") {
        return { id: e.target.id, estado: "ocupado", dni: dataUser.dni, nombre: dataUser.nombre, apellido: dataUser.apellido, creditos: dataUser.creditos   };
      } else if (asiento.id === e.target.id && asiento.estado === "ocupado") {
        return { id: e.target.id, estado: "libre" };
      } else {
        return asiento;
      }
    });
    setAsientos(newArray);
  };




/*************************************************/
/*                MUSTRAR RESERVA POR DIA                */
/************************************************/
    
   
  const reservado = useEffect(() => {
    fetch("/reservaPuesto/get", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fecha: diaSelect }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res[0] === undefined) {
          setAsientos(asientosLibres);
          console.log("no hay ninguna reserva este dia");
        } else {
          setAsientos(res[0].puestos);
            console.log(res[0].puestos)
        }
      });
      }, [daySelected]); 
    
  


/************************************************/
/*                   SIDEBAR                   */
/************************************************/

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
          console.log(res)
          if (res.error === true) {
            setMensaje(res.mensaje)
            handleShow()
            
          } else {
            setMensaje("")
            setData(res.usuario)
            setDataUser(res.usuario)
            setLogueado(true)
            setAdministrador(res.usuario.administrador)
            sessionStorage.setItem("usuario", JSON.stringify(res.usuario))
              
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
    sessionStorage.removeItem("usuario")
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
          <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout} />
             <Home
              logueado={logueado} />
          </div>
        </div>
      </Route>

      <Route exact path="/home-admin">
        <div className="wrapper">
          <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout} />
             <HomeAdmin
                logueado={logueado} />
          </div>
        </div>
      </Route>

    <Route exact path="/reserva-puesto">
        <div className="wrapper">
          <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
            handleLogout={ handleLogout}
            />
            <ReservaPuesto
              dataUser={dataUser}
              logueado={logueado}
              asientos={asientos}
              manejarEstado={manejarEstado}
              reservado={reservado}
              asientosLibres={asientosLibres}
              daySelected={daySelected}
              onChange={onChange}
              diaSelect={diaSelect}
              infoAsiento={ infoAsiento}
             
            />
          </div>
        </div>
      </Route>


    <Route exact path="/alta-usuario">
        <div className="wrapper">
       <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
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


    <Route exact path="/bajaModif-usuario">
        <div className="wrapper">
            <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger} 
              navFlexible={nav100}
             handleLogout={ handleLogout} />
            <BajaModifUsuario
              logueado={logueado}
               dataUser={dataUser}
            />
          </div>
        </div>
      </Route>

      <Route exact path="/modificar-usuario/:id">
        <div className="wrapper">
            <SidebarConfig
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout}
            />
            <ModificarUsuario
              dataUser={dataUser}
              logueado={logueado}
           
            />
          </div>
        </div>
      </Route>


      <Route exact path="/configuracion-usuario">
        <div className="wrapper">
            <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
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
           <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout}
            />
            <MisReservas 
              dataUser={dataUser}
              logueado={logueado}
              asientos={asientos}
            />
          </div>
        </div>
      </Route>

 

    <Route exact path="/dashboard">
        <div className="wrapper">
          <Sidebar
            sidebar={sidebar}
            logueado={logueado}
            dataUser={dataUser}
            administrador={administrador} /> 
          <div className="main">
            <Cabecera
              cambiarSidebar={handleHamburger}
              navFlexible={nav100}
              handleLogout={ handleLogout}
            />
            <Dashboard
              logueado={logueado}
              dataUser={dataUser}
            />
          </div>
        </div>
      </Route>
    </BrowserRouter>
  )
}

export default App;

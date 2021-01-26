import React from 'react';
import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';
//import moment-timezone from 'moment';

//import { Dropdown } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
//import { ButtonGroup } from 'react-bootstrap';
//import { SplitButton } from 'react-bootstrap';
import Plano from './Plano/plano';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './Plano/plano.css';

function ReservaPuesto(props) {
    console.log(props.dataUser)
   
    

    const [mensaje, setMensaje] = useState("");
    const [dni, setDni] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const [daySelected, onChange] = useState(new Date());
    const [data, setData] = useState([]);

    /* Formateo de Fecha */
    //moment.locale('es');
    const diaSelect = moment(daySelected).format("DD/MM/YYYY")
    console.log(diaSelect)
   
    
    /* Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




 

    /************************************************/
    /*                AÑADIR RESERVA               */
    /************************************************/
   
    const addReserva = () => {
        fetch("/reservaPuesto/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dni: props.dataUser.dni,
                nombre: props.dataUser.nombre,
                apellido: props.dataUser.apellido,
                id: props.asientos[0].id,
                fecha: diaSelect
            }),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    setMensaje(res.mensaje)
                    handleShow()
                
                } else {
                    setMensaje(res.mensaje)
                    setData(res.alta)
                    handleShow()
                }
            });
        
    }
    

 /*    if (!props.logueado) {
        return <Redirect to="/" />
            
    } else { */
    
    
 const [asientos, setAsientos] = useState(
    [
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
        { id: "M8-6", estado: "libre" }
    ]
  );

      
  const manejarEstado = (e) => {
    e.preventDefault();
    const newArray = asientos.map((asiento) => {
      if (asiento.id === e.target.id && asiento.estado === "libre") {
        //setPuestoColor("st11")
        return { id: e.target.id, estado: "ocupado" };
      } else if (asiento.id === e.target.id && asiento.estado === "ocupado") {
        //setPuestoColor("st11-ocupado")
        return { id: e.target.id, estado: "libre" };
      } else {
        return asiento;
      }
    });
   
    setAsientos(newArray);
  } 
  

    

 
        return (
            <main className="bg-registro1 content p-0">
                <div className="container-fluid p-0">
                    <div className="row vh-100">
                        <div className="col-xs-12 col-lg-8 p-4">
                            <div className="row">
                                <div className="col-xs-12 col-lg-9">
                                    <h3 className="text-white">Reservar puesto</h3>
                                </div>

                                <div className="col-xs-12 col-lg-3">
                                    <select className="form-select form-select-lg mb-3" aria-label="puestos-disponibles">
                                        <option selected>Disponibles</option>
                                        <option value="1">M1-1</option>
                                        <option value="2">M1-2</option>
                                        <option value="3">M1-3</option>
                                    </select>
                                </div>
                            </div>
                     
                            <div className="row">
                                <div className="col-xs-12 bg-white p-3 mx-3">
                                    <Plano manejarEstado={manejarEstado} puestoColor={props.puestoColor} asientos={asientos} />
                                </div>
                            </div>
                        
                  
                        </div>

                        <div className="col-xs-12 col-lg-4 bg-light">
                            <div className="col-xs-12">
                                <div className="card mr-3 mt-3">
                                    <div className="card-body">
                                        <div className="calendar aside">
                                            <h4>Selecciona día y hora</h4>
                                            <div className="d-flex justify-content-center">
                                                <Calendar
                                                    onChange={onChange}
                                                    daySelected={daySelected}
                                                />
                                            </div>
                                        </div>
                                        <div className="row justify-content-center align-items-center mt-3">
                                            <Button variant="btn-block" onClick={addReserva}>Reservar puesto</Button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                     
                            <div className="col-xs-12">
                                <div className="card mt-3 mr-3">
                                    <div className="card-body card-info p-2">
                                        <div className="pl-2">
                                            <h5 className="card-title m-0">Tu reserva activa</h5>
                                            <ul className="card-text text-dark">
                                         
                                            </ul>
                                        </div>
                                        <img className="card-img" src="./img/icons/ico_reservaActiva.svg" alt="icono mis reservas" />
                                    </div>
                                </div>
                            </div>

                
                            <div className="col-xs-12">
                                <Link to="/mis-reservas" className="area-enlaces">
                                    <div className="card mt-3 mr-3">
                                        <div className="card-body card-enlace p-2">
                                            <div className="pl-2">
                                                <h5 className="card-title m-0">Ver mi reservas anteriores</h5>
                                                <p className="text-dark m-0">Consulta todas tus reservas realizadas</p>
                                            </div>
                                            <img className="card-img" src="./img/icons/ico_misReservas.svg" alt="icono mis reservas" />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                

                        </div>
                    </div>
                </div>
    
       
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{mensaje}</Modal.Title>
                    </Modal.Header>
                </Modal>
            </main>

        )
    }
//}

export default ReservaPuesto;



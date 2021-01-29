import React from 'react';
import { useState } from "react";
import Calendar from 'react-calendar';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import Plano from './Plano/plano';
import 'react-calendar/dist/Calendar.css';
import './Plano/plano.css';



function ReservaPuesto(props) {
    console.log(props.usuario)
    console.log(props.asientos)

     let history = useHistory();

    const [mensaje, setMensaje] = useState("");
 


 
   

   
    /* Modal */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


const [daySelected, onChange] = useState(new Date());
const [data, setData] = useState(new Date());

    

   /* Formateo de Fecha */
    //moment.locale('es');
    const diaSelect = moment(daySelected).format("DD/MM/YYYY")
    console.log(diaSelect)
    
/*************************************************/
/*                AÑADIR RESERVA                */
/************************************************/
    const reservar = () => {
    fetch("/reservaPuesto/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
            fecha: diaSelect,
            puestos: props.asientos,
          nombre: props.daraUser.name 
        }),
    })
       .then((res) => res.json()) 
      .then((res) => console.log(res));
   
};

    
    
    
    
    
    
    
/*    
   const addReserva = () => {
        fetch("/reservaPuesto/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                puestos: props.asientos,
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
        
    }   */
  
    
if (!props.logueado) {
	history.push("/");	
} else {


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
                            <div className="col-xs-12 bg-white px-0">
                                <Plano manejarEstado={props.manejarEstado} asientos={props.asientos} />
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
                                        <Button variant="btn-block" onClick={reservar}>Reservar puesto</Button>
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
}

export default ReservaPuesto;



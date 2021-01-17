import React from 'react';
import { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { Dropdown } from 'react-bootstrap';
//import { DropdownButton } from 'react-bootstrap';
//import { ButtonGroup } from 'react-bootstrap';
import { SplitButton } from 'react-bootstrap';
import Plano from './Plano/plano';
//import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function ReservaPuesto() {
    const defaultValue = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    day: new Date().getDate(),
};

const [selectedDay, setSelectedDay] = useState(defaultValue);

//const [dataReserva, setDataReserva] = useState([]);
 

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
                                <Plano />
                            </div>
             
                    </div>
                        
                      
                  
                </div>

            <div className="col-xs-12 col-lg-4 bg-light">
                    <div className="col-xs-12">
                        <div className="card mr-3 mt-3">
                                <div className="card-body">
                                    <div className="calendar">
                                        <h4 className="card-title">Selecciona día y hora</h4>
                                        <div className="">
                                            <Calendar
                                                value={selectedDay}
                                                onChange={setSelectedDay}
                                                shouldHighlightWeekends
                                            />
                                           
                                            <div className="seleccion-hora mt-2">
                                                <SplitButton
                                                menuAlign={{ lg: 'left' }}
                                                    title="Rango de horas"
                                                    size="lg"
                                                 
                                                id="dropdown-menu-align-responsive-2">
                                                    
                                                <Dropdown.Item eventKey="1" className="bg-light">
                                                    <span>08:00 - 09:50</span>
                                                </Dropdown.Item>

                                                <Dropdown.Item eventKey="2">
                                                   <span>10:00 - 11:50</span>
                                                    </Dropdown.Item>
                                                    
                                                <Dropdown.Item eventKey="3">
                                                   <span>12:00 - 13:50</span>
                                                    </Dropdown.Item>
                                                    
                                                <Dropdown.Item eventKey="4">
                                                   <span>14:00 - 15:50</span>
                                                    </Dropdown.Item>
                                                    
                                                <Dropdown.Item eventKey="5">
                                                   <span>16:00 - 17:50</span>
                                                    </Dropdown.Item>

                                                <Dropdown.Item eventKey="6">
                                                   <span>18:00 - 19:50</span>
                                                    </Dropdown.Item>
                                                    
                                                </SplitButton>
                                            </div>                                            
                                     
                                        </div>
                                </div>
                            </div>
                        </div>
                        </div>


                <div className="row justify-content-center my-3 px-3">
                    <Button variant="btn-block mt-4">Registrar</Button>
                </div>

                    <div className="col-xs-12">
                        <div className="card mr-3">
                            <div className="card-body">
                                <h5 className="card-title">Selecciona hora</h5>
                                <p className="card-text">
                                    Poner input fecha
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <div className="card mr-3">
                            <div className="card-body">
                                <h5 className="card-title">Reserva actual</h5>
                                <p className="card-text">
                                    Poner datos de la reserva
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12">
                        <div className="card mr-3">
                            <div className="card-body">
                                <h5 className="card-title">Historial de reservas</h5>
                                <p className="card-text">
                                    Poner el historial de las reservas
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            
       
    
    </main>

    )
}

export default ReservaPuesto;



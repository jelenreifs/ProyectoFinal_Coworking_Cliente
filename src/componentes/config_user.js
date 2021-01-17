import React from 'react';
import { Button } from 'react-bootstrap';
//import { Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function ConfiguracionUsuario() {


    return (
     <main className="bg-home content p-0">
            <div className="container-fluid p-0">
                <div className="row vh-100 px-4">
                    <div className="col-xs-12 col-lg-4 px-4">
                        <div className="area-foto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmfaerMMCR6jgdXwmlfYFycBhBCBKAXftOw&usqp=CAU" alt="foto-usuario" />
                            <h5 className="text-white my-4">Cambiar foto</h5>
                        </div>
                    <div>
                            
                        <div className="row">
                                <div className="col-xs-12">
                                    <label className="file-label" htmlFor="file-input">File:</label>
                                    <input type="file" name="attachment[]"  multiple="multiple" /> 
                                        <small>Max size 10MB.</small>
                                </div>
                        </div>
                    </div>
                    </div>

                <div className="col-xs-12 col-lg-8 bg-light">
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            <div className="card mr-3">
                                <div className="card-body">
                                    <h4 className="text-primary">Configuración de usuario</h4>
                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="dni" className="form-label">DNI</label>
                                            <input type="text" className="form-control" id="dni"
                                                placeholder="Ej:12345678P" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="nombre" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="nombre"
                                                placeholder="nombre" />
                                        </div>
                                            
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="apellido" className="form-label">Apellido</label>
                                            <input type="text" className="form-control" id="apellido"
                                                placeholder="Apellido" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Ej:napellido@empresa.es" />
                                            </div>
                                            
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                                            <input type="tel" className="form-control" id="telefono"
                                                placeholder="Ej:600123123" />
                                        </div>
                                        </div>
                                        

                                    <div className="row justify-content-center my-3 px-3">
                                        <Button variant="btn btn-xs-block  mt-4">Actualizar</Button>
                                    </div>

                                            
                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </div>
    </main>
    )
}


export default ConfiguracionUsuario;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";



function HomeAdmin(props) {
     let history = useHistory();




 /*    if (!props.logueado) {
        return <Redirect exact to="/" />
    } else { */

        if (!props.logueado) {
		 history.push("/");	
	} else { 



        return (
            <main className="bg-home-admin content p-0">
                <div className="container-fluid p-0">
                    <div className="row vh-100 px-4">
                        <div className="col-xs-12 col-lg-6 home-description p-4">
                            <h3 className="text-white">Poner un slogan</h3>
                            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>

                        <div className="col-xs-12 col-lg-6 bg-cards-dark pl-4">
                            <div className="col-xs-12 col-lg-8">
                                <div className="card card-home mt-3 mr-3 h-25">
                                    <div className="card-body">
                                        <div className="card-title-ico mb-3">
                                            <h4 className="mb-0 text-primary"><span>Reserva</span>Puesto de trabajo</h4>
                                            <Link to="/reserva-puesto" className="ico-circle" >
                                                <img src="./img/icons/arrow-right-white.svg" alt="ico-flecha" />
                                            </Link>
                                        </div>
                                        <p className="card-text">
                                            <span>Reserva</span>Espacios de trabajo en bloque para trabajar en equipo.
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-lg-8 opacity">
                                <div className="card card-home mt-3 mr-3 h-25">
                                    <div className="card-body">
                                        <div className="card-title-ico mb-3">
                                            <h4 className="mb-0 text-primary"><span>Reserva</span>Sala de reuniones</h4>
                                            <Link to="#" className="ico-circle" >
                                                <img src="./img/icons/arrow-right-white.svg" alt="ico-flecha" />
                                            </Link>
                                        </div>
                                        <p className="card-text">
                                            Decide dónde y cuándo celebrar reuniones con facilidad
                                    </p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-12 col-lg-8 opacity">
                                <div className="card card-home mt-3 mr-3 h-25">
                                    <div className="card-body">
                                        <div className="card-title-ico mb-3">
                                            <h4 className="mb-0 text-primary"><span>Reserva</span>Plaza de parking</h4>
                                            <Link to="#" className="ico-circle" >
                                                <img src="./img/icons/arrow-right-white.svg" alt="ico-flecha" />
                                            </Link>
                                        </div>
                                        <p className="card-text">
                                            Reserva una plaza de las plazas de parking que te ofrece la instalación
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
    

}


export default HomeAdmin;

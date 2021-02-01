import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Home(props) {
     let history = useHistory();


/*     if (!props.logueado) {
        return <Redirect  exact  to="/" />
    } else { */

        if (!props.logueado) {
		 history.push("/");	
	} else {




        return (
            <main className="bg-home content p-0">
                <div className="container-fluid p-0">
                    <div className="row vh-100 px-4">
                        <div className="col-xs-12 col-lg-6 col-xxl-8 home-info-wrapper ">
                            <div className="home-description p-4">
                                <h3 className="text-white">Un lugar de trabajo centrado en las personas</h3>
                                <p className="text-white">
                                    <span>¡Simplemente vida de oficina! </span>
                                      <span>   Para mayor bienestar, compromiso y productividad </span>
                                </p>
                            </div>
                           
                            
                            
                            
                        <div className="icos-home-wrapper">
                             <div>
                                    <img src="./img/icons/ico_internet.svg" alt="icono internet" />
                                    <p>Internet</p>
                                </div>
                                        <div>
                                    <img src="./img/icons/ico_telefono.svg" alt="icono telefono" />
                                    <p>Teléfono</p>
                            </div>
                                <div>
                                    <img src="./img/icons/ico_proyector.svg" alt="ico proyector" />
                                    <p>Recursos de oficina</p>
                            </div>
                            <div>
                                    <img src="./img/icons/ico_dispensador.svg" alt="icono dispensador" />
                                    <p>Aquaservice</p>
                            </div>
                            <div>
                                    <img src="./img/icons/ico_coffe.svg" alt="icono café" />
                                    <p>Máquina de café</p>
                            </div>
                            <div>
                                    <img src="./img/icons/ico_vending.svg" alt="icono vendind" />
                                    <p>Máquina de vending</p>
                            </div>
                            <div>
                                    <img src="./img/icons/ico_parking.svg" alt="icono parking" />
                                    <p>Parking</p>
                            </div>
                                <div>
                                    <img src="./img/icons/ico_limpieza.svg" alt="icono limpieza" />
                                    <p>Limpiesza diaria</p>
                            </div>
                        </div>
                        </div>

                     

                        <div className="col-xs-12 col-lg-6 col-xxl-4 bg-cards-dark pl-4">
                            <div className="col-xs-12">
                                <div className="card card-home mt-3 mr-3 h-25">
                                    <div className="card-body">
                                        <div className="card-title-ico mb-3">
                                            <h4 className="mb-0 text-primary"><span>Reserva</span>Puesto de trabajo</h4>
                                            <Link to="/reserva-puesto" className="ico-circle" >
                                                <img src="./img/icons/arrow-right-white.svg" alt="ico-flecha" />
                                            </Link>
                                        </div>
                                    
                                            <p className="card-text">
                                            Reserva un puesto individual, o en bloque para un equipo.
                                    </p>
                                        
                                        <div className="card-image">
                                             <img src="./img/icons/ico_reserva_puesto.svg" alt="ico-reserva" />
                                           
                                    </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 opacity">
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


                            <div className="col-xs-12 opacity">
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


export default Home;

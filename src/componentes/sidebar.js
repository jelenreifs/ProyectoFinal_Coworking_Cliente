import React from 'react';
import { Link, useLocation, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

//import { Modal } from 'react-bootstrap';


function Sidebar(props) {

	 let history = useHistory();
	const location = useLocation();

	
	const [homeActive, setHomeActive] = useState(() => {
		if (location.pathname === "/Home") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});

	const [puestoActive, setPuestoActive] = useState(() => {
		if (location.pathname === "/reserva-puesto") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});

	

	const [reunionActive, setReunionActive] = useState(() => {
		if (location.pathname === "#") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});


	const [parkingActive, setParkingActive] = useState(() => {
	
		if (location.pathname === "#") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});


	const [notificacionActive, setNotificacionActive] = useState(() => {
	
		if (location.pathname === "#") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});

	const [dashboardActive, setDashboradActive] = useState(() => {
	
		if (location.pathname === "/dashboard") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});


	const [altaActive, setAltaActive] = useState(() => {
	
		if (location.pathname === "/alta-usuario") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});

	const [bajaActive, setBajaActive] = useState(() => {
	
		if (location.pathname === "/baja-usuario") {
			const initialState = "sidebar-item active";
			return initialState;
		} else {
			const initialState = "sidebar-item";
			return initialState;
		}
	});


/* 	if (!props.logueado) {
		return <Redirect  exact  to="/" />
            
	} else {  */

	console.log(props.dataUser)

	if (!props.administrador) {
			return (
			<nav id="sidebar" className={props.sidebar} >
				<div className="sidebar-content js-simplebar">
					<Link to="#" className="sidebar-brand">
						<img id="logo" className="align-middle" src="./img/Logo_Coowork_2.svg" alt="logotipo" />
					</Link>

					<ul className="sidebar-nav">
					<li className="sidebar-user">
					<Link to="/configuracion-usuario" className="sidebar-link">
									<img src={ props.dataUser.foto} className="avatar" alt="Imagen" />
								<div className="sidebar-user-info">
									<span>Nombre Apellido</span>
									<p>100 créditos</p>
								</div>
							</Link>
						
						</li>

						<li className={homeActive}>
							<Link to="/home" className="sidebar-link">
								<img className="align-middle" src="./img/icons/home.svg" alt="ico-home" />
								<i className="align-middle" data-feather="sliders"></i>
								<span className="align-middle">Home</span>
							</Link>
						</li>

						<li className="sidebar-header">
							Tipo de reserva
					</li>

						<li className={puestoActive}>
							<Link to="/reserva-puesto" className="sidebar-link" >
								<img className="align-middle" src="./img/icons/monitor.svg" alt="ico-puesto" />
								<span className="align-middle">Puesto de trabajo</span>
							</Link>
						</li >
                    
						<li className={reunionActive}>
							<Link to="#" className="sidebar-link">
								<img className="align-middle opacity2" src="./img/icons/meeting.svg" alt="ico-sala-reunion" />
								<span className="align-middle opacity2">Sala de reuniones</span>
							</Link>
						</li>

						<li className={parkingActive}>
							<Link to="#" className="sidebar-link" >
								<img className="align-middle opacity2" src="./img/icons/car.svg" alt="ico-parking" />
								<span className="align-middle opacity2">Parking</span>
							</Link>
						</li>

						<li className="sidebar-header">
							Notificaciones
					</li>

						<li className={notificacionActive}>
							<Link to="#" className="sidebar-link">
								<img className="align-middle opacity2" src="./img/icons/bell.svg" alt="ico-notificacion" />
								<span className="align-middle opacity2">Mensajes</span>
							</Link>
						</li>
					</ul>

				</div>
			</nav>
		)
		
	} else { 


		return (
			<nav id="sidebar" className={props.sidebar} >
				<div className="sidebar-content js-simplebar">
					<Link to="#" className="sidebar-brand">
						<img id="logo" className="align-middle" src="./img/Logo_Coowork_2.svg" alt="logotipo" />
					</Link>

					<ul className="sidebar-nav">
						<li className="sidebar-user">
						<Link to="/configuracion-usuario" className="sidebar-link">
									<img src={ props.dataUser.foto} className="avatar" alt="Imagen" />
								<div className="sidebar-user-info">
									<span>Nombre Apellido</span>
									<p>100 créditos</p>
								</div>
							</Link>
						</li>
	

						<li className="sidebar-header">
							Administrador
					</li>

						<li className={homeActive}>
							<Link to="/home" className="sidebar-link">
								<img className="align-middle" src="./img/icons/home.svg" alt="ico-home" />
								<span className="align-middle">Home</span>
							</Link>
						</li>

					
						<li className={dashboardActive}>
							<Link to="/dashboard" className="sidebar-link">
								<img className="align-middle" src="./img/icons/dashboard.svg" alt="ico-dashboard" />
								<span className="align-middle">Dashboard</span>
							</Link>
						</li>

						<li className={altaActive}>
							<Link to="/alta-usuario" className="sidebar-link">
								<img className="align-middle" src="./img/icons/alta-user.svg" alt="ico-alta-usuario" />
								<span className="align-middle">Alta usuario</span>
							</Link>
						</li>

						<li className={bajaActive}>
							<Link to="/baja-usuario" className="sidebar-link">
								<img className="align-middle" src="./img/icons/baja-user.svg" alt="ico-baja-usuario" />
								<span className="align-middle">Baja de usuario</span>
							</Link>
						</li>

						<li className="sidebar-header">
							Tipo de reserva
					</li>

						<li className={puestoActive}>
							<Link to="/reserva-puesto" className="sidebar-link" >
								<img className="align-middle" src="./img/icons/monitor.svg" alt="ico-puesto" />
								<span className="align-middle">Puesto de trabajo</span>
							</Link>
						</li >
                    
						<li className={reunionActive}>
							<Link to="#" className="sidebar-link">
								<img className="align-middle opacity2" src="./img/icons/meeting.svg" alt="ico-sala-reunion" />
								<span className="align-middle opacity2">Sala de reuniones</span>
							</Link>
						</li>

						<li className={parkingActive}>
							<Link to="#" className="sidebar-link" >
								<img className="align-middle opacity2" src="./img/icons/car.svg" alt="ico-parking" />
								<span className="align-middle opacity2">Parking</span>
							</Link>
						</li>

						<li className="sidebar-header">
							Notificaciones
					</li>

						<li className={notificacionActive}>
							<Link to="#" className="sidebar-link">
								<img className="align-middle opacity2" src="./img/icons/bell.svg" alt="ico-notificacion" />
								<span className="align-middle opacity2">Mensajes</span>
							</Link>
						</li>
					</ul>

				</div>
			</nav>
		)
	}
}

export default Sidebar;

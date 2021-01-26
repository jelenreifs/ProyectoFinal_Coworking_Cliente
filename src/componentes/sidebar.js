import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Modal } from 'react-bootstrap';


function Sidebar(props) {
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



    return (
       	<nav id="sidebar" className={props.sidebar} >
			<div className="sidebar-content js-simplebar">
				<Link to="#" className="sidebar-brand">
					<img id="logo" className="align-middle" src="./img/Logo_Coowork_2.svg" alt="logotipo" />
				</Link>

				<ul className="sidebar-nav">
					<li className="sidebar-user">
						<Link to="/configuracion-usuario" className="sidebar-link">
							<img src="./img/avatars/avatar-2.jpg" className="avatar" alt="Imagen" />
							<div className="sidebar-user-info">
								<span>Nombre Apellido</span>
								<p>100 créditos</p>
							</div>
						</Link>
					</li>


					<li className={ homeActive }>
						<Link to="/home" className="sidebar-link">
							<img className="align-middle" src="./img/icons/home.svg" alt="ico-home" /> 
							<i className="align-middle" data-feather="sliders"></i>
							<span className="align-middle">Home</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Tipo de reserva
					</li>

					<li className={ puestoActive }>
						<Link to="/reserva-puesto" className="sidebar-link" >
							<img className="align-middle" src="./img/icons/monitor.svg" alt="ico-puesto" /> 
							<span className="align-middle">Puesto de trabajo</span>
						</Link>
                    </li >
                    
                    <li className={ reunionActive }>
						<Link to="#" className="sidebar-link">
							<img className="align-middle" src="./img/icons/meeting.svg" alt="ico-sala-reunion" /> 
							<span className="align-middle">Sala de reuniones</span>
						</Link>
					</li>

					<li className={ parkingActive }>
						<Link to="#" className="sidebar-link" >
							<img className="align-middle" src="./img/icons/car.svg" alt="ico-parking" /> 
							<span className="align-middle">Parking</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Notificaciones
					</li>

					<li  className={ notificacionActive }>
						<Link to="#" className="sidebar-link">
							<img className="align-middle" src="./img/icons/bell.svg" alt="ico-notificacion" /> 
							<span className="align-middle">Mensajes</span>
						</Link>
					</li>
				</ul>

			</div>
		</nav>
    )
}

export default Sidebar;

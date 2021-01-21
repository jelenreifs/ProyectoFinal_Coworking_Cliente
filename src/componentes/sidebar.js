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




/* 	const handleHomeActive = (e) => { 
        e.preventDefault();
        setHomeActive("sidebar-item")
          } */
	


	

    return (
       	<nav id="sidebar" className={props.sidebar} >
			<div className="sidebar-content js-simplebar">
				<Link to="#" className="sidebar-brand">
					<span className="align-middle">LogoAplicacion</span>
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
						<Link to="/Home" className="sidebar-link">
							<i className="align-middle" data-feather="sliders"></i>
							<span className="align-middle">Home</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Tipo de reserva
					</li>

					<li className={ puestoActive }>
						<Link to="/reserva-puesto" className="sidebar-link" >
							<i className="align-middle" data-feather="user"></i>
							<span className="align-middle">Puesto de trabajo</span>
						</Link>
                    </li >
                    
                    <li className={ reunionActive }>
						<Link to="#" className="sidebar-link">
							<i className="align-middle" data-feather="settings"></i>
							<span className="align-middle">Sala de reuniones</span>
						</Link>
					</li>

					<li className={ parkingActive }>
						<Link to="#" className="sidebar-link" >
							<i className="align-middle" data-feather="credit-card"></i> <span
								className="align-middle">Parking</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Notificaciones
					</li>

					<li  className={ notificacionActive }>
						<Link to="#" className="sidebar-link">
							<i className="align-middle" data-feather="credit-card"></i>
							<span className="align-middle">Mensajes</span>
						</Link>
					</li>
				</ul>

			</div>
		</nav>
    )
}

export default Sidebar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { Redirect } from 'react-router-dom';
//import { Modal } from 'react-bootstrap';

function Sidebar(props) {
	const [homeActive, setHomeActive] = useState("sidebar-item");
	const [puestoActive, setPuestoActive] = useState("sidebar-item");
	const [reunionActive, setReunionActive] = useState("sidebar-item");
	const [parkingActive, setParkingActive] = useState("sidebar-item");
	const [notificacionActive, setNotificacionActive] = useState("sidebar-item");


	const handleHomeActive = (e) => { 
        e.preventDefault();
        if (homeActive === "sidebar-item") {
			setHomeActive("sidebar-item active")
			setPuestoActive("sidebar-item")
			setReunionActive("sidebar-item")
			setParkingActive("sidebar-item")
			setNotificacionActive("sidebar-item")
        } else {
        setHomeActive("sidebar-item")
          }
	}

	const handlePuestoActive = (e) => { 
        e.preventDefault();
        if (puestoActive === "sidebar-item") {
			setHomeActive("sidebar-item")
			setPuestoActive("sidebar-item active")
			setReunionActive("sidebar-item")
			setParkingActive("sidebar-item")
			setNotificacionActive("sidebar-item")
        } else {
            setPuestoActive("sidebar-item")
          }
	}

	const handleReunionActive = (e) => { 
        e.preventDefault();
        if (reunionActive === "sidebar-item") {
			setHomeActive("sidebar-item")
			setPuestoActive("sidebar-item")
			setReunionActive("sidebar-item active")
			setParkingActive("sidebar-item")
			setNotificacionActive("sidebar-item")
        } else {
            setReunionActive("sidebar-item")
          }
	}

	const handleParkingActive = (e) => { 
        e.preventDefault();
        if (parkingActive === "sidebar-item") {
			setHomeActive("sidebar-item")
			setPuestoActive("sidebar-item")
			setReunionActive("sidebar-item")
			setParkingActive("sidebar-item active")
			setNotificacionActive("sidebar-item")
        } else {
            setParkingActive("sidebar-item")
          }
	}

	const handleNotificacionActive = (e) => { 
        e.preventDefault();
        if (notificacionActive === "sidebar-item") {
			setHomeActive("sidebar-item")
			setPuestoActive("sidebar-item")
			setReunionActive("sidebar-item")
			setParkingActive("sidebar-item")
			setNotificacionActive("sidebar-item active")
        } else {
            setNotificacionActive("sidebar-item")
          }
	}
	
	

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
						<Link to="/Home" className="sidebar-link" onChange={ handleHomeActive }>
							<i className="align-middle" data-feather="sliders"></i>
							<span className="align-middle">Home</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Tipo de reserva
					</li>

					<li className={ puestoActive }>
						<Link to="/reserva-puesto" className="sidebar-link" onChange={ handlePuestoActive } >
							<i className="align-middle" data-feather="user"></i>
							<span className="align-middle">Puesto de trabajo</span>
						</Link>
                    </li >
                    
                    <li className={ reunionActive }>
						<Link to="#" className="sidebar-link" onChange={ handleReunionActive }>
							<i className="align-middle" data-feather="settings"></i>
							<span className="align-middle">Sala de reuniones</span>
						</Link>
					</li>

					<li className={ parkingActive }>
						<Link to="#" className="sidebar-link" onChange={ handleParkingActive }>
							<i className="align-middle" data-feather="credit-card"></i> <span
								className="align-middle">Parking</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Notificaciones
					</li>

					<li  className={ notificacionActive }>
						<Link to="#" className="sidebar-link" onChange={ handleNotificacionActive }>
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

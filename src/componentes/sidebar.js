import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import { Modal } from 'react-bootstrap';

function Sidebar(props) {
	const [active, setActive] = useState("sidebar-item");


	const handleActive = (e) => { 
        e.preventDefault();
        if (active === "sidebar-item") {
          setActive("sidebar-item active")
        } else {
            setActive("sidebar-item")
          }
	}
	

    return (
       	<nav id="sidebar" className={props.sidebar} >
			<div className="sidebar-content js-simplebar">
				<Link to="" className="sidebar-brand" href="index.html">
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


					<li className={ active }>
						<Link to="/Home" className="sidebar-link" onClick={ handleActive }>
							<i className="align-middle" data-feather="sliders"></i>
							<span className="align-middle">Home</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Tipo de reserva
					</li>

					<li  className={ active }>
						<Link to="/reserva-puesto" className="sidebar-link" onClick={ handleActive }>
							<i className="align-middle" data-feather="user"></i>
							<span className="align-middle">Puesto de trabajo</span>
						</Link>
                    </li >
                    
                    <li  className={ active }>
						<Link to="#" className="sidebar-link" onClick={ handleActive }>
							<i className="align-middle" data-feather="settings"></i>
							<span className="align-middle">Sala de reuniones</span>
						</Link>
					</li>

					<li  className={ active }>
						<Link to="#" className="sidebar-link" onClick={ handleActive }>
							<i className="align-middle" data-feather="credit-card"></i> <span
								className="align-middle">Parking</span>
						</Link>
					</li>

					<li className="sidebar-header">
						Notificaciones
					</li>

					<li className="sidebar-item">
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

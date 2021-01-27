import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Cabecera(props) {

	


	
   return (
		/* <nav className="navbar navbar-expand navbar-bg"> */
		<nav className={ props.navFlexible}>
            <div className="sidebar-toggle d-flex" onClick={props.cambiarSidebar}>
				<i className="hamburger align-self-center"></i>
            </div>
            
            	<div className="navbar-collapse collapse">
					<ul className="navbar-nav navbar-align">
						<li className="nav-item dropdown">
							<Link to= "#" className="nav-icon dropdown-toggle" id="alertsDropdown" data-toggle="dropdown">
							<div className="position-relative">
								<Link to="#" >
									<img className="mb-2" src="./img/icons/bell_white.svg" alt="ico-notificacion" /> 
								</Link>
								<span className="indicator">4</span>
							</div>
							</Link>
							<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right py-0"
								aria-labelledby="alertsDropdown">					
	
							</div>
						</li>
					<li className="nav-item dropdown">
							<Link to="/" >
						   <img className="ml-2" src="./img/icons/power_white.svg" alt="ico-desconectar" onClick={props.handleLogout} />  
						  
							</Link>							
						</li>
					</ul>
				</div>
			
	    </nav>
    )
}

export default Cabecera;



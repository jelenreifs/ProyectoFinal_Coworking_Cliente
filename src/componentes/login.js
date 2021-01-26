import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';



function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    if (props.logueado) {
         if (props.usuario.administrador === false) {
             return <Redirect to="/home" />
             
        } else { 
             return <Redirect to="/home-admin" /> 
        }
 

    } else { 
        return (
            <div className="login-wrapper">
                <div className="container px-4 py-5 mx-auto">
                    <div className="container px-4 py-5 mx-auto">
                        <div className="card card0">
                            <div className="d-flex flex-lg-row flex-column-reverse">
                                <div className="card login-form">
                                    <div className="row justify-content-center my-auto">
                                        <div className="col-md-8 col-10 my-5">
                                            <div className="row justify-content-center px-3 mb-3">
                                                <img id="logo" src="./img/Logo_Coowork_1.svg" alt="logotipo" />
                                            </div>                                          <div className="form-group">
                                                <label className="form-control-label">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={handleChangeEmail}
                                                    autoComplete="off"
                                                    required />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-control-label">Password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    autoComplete="off"
                                                    value={password}
                                                    onChange={handleChangePassword}
                                                    required />
                                            </div>
                                            <div className="row justify-content-center my-3 px-3">
                                                <Button variant="btn-block mt-4" onClick={() => props.loginUser(email, password)}>Login</Button>
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                                <div className="card login-description">
                                    <div className="my-auto mx-md-5 px-md-5 right text-white">
                                        <h3 className="text-white">MÁS FLEXIBILIDAD, PRODUCTIVIDAD Y EFICIENCA</h3>
                                        <p className="login-description-text">Es una solución inteligente para simplificar el uso y la gestión de los puestos de trabajo en entornos de «smart working ».
                                        Los empleados pueden utilizar sus smartphones u otros dispositivos para encontrar un puesto libre y reservar salas de reuniones o puestos de trabajo que se ajusten a sus necesidades.
                                   </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{props.mensaje}</Modal.Title>
                    </Modal.Header>
                </Modal>
            </div>
        
        )
    }
}

    

export default Login;

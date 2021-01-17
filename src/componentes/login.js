import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [data, setData] = useState([]);
const [mensaje, setMensaje] = useState("");
    
/*  const [formState, setFormState] = useState( { email: '', password:'' ); */
    //const { email, password } = formState;

/* Modal */
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  

/* History */
let history = useHistory();
const handleHome= () => history.push("/home");

const loginUser = () => { 
        fetch("http://users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }),
    })
        .then(res => res.json())
        .then(res => {
            if (res.error === true) {
            setMensaje(res.mensaje)
            handleShow()
            
            
            } else {
            setMensaje("")
                setData(res.usuario)
                 console.log(res.usuario);
            handleHome()
            } 
        
        });
    }
    
   

   const handleChangeEmail = (e) => {
    setEmail(e.target.value) 
  }

    const handleChangePassword = (e) => {
    setPassword(e.target.value) 
  }

    
/*     const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: [target.value]
        }) 
  }
     */
    
    
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
                                     <img id="logo" src="https://i.imgur.com/PSXxjNY.png" alt="fgdfg"/> 
                                    </div>
                                    <h4 className="mb-5 text-center heading">Nombre</h4>
                                    <h3 className="msg-info">Login</h3>
                               <div className="form-group">
                                        <label className="form-control-label">Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={ handleChangeEmail }
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
                                                onChange={ handleChangePassword }
                                                required />
                                            </div>
                                    <div className="row justify-content-center my-3 px-3">
                                        <Button variant="btn-block mt-4" onClick={loginUser}>Login</Button>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="card login-description">
                            <div className="my-auto mx-md-5 px-md-5 right text-white">
                                <h3 className="text-white">Coworking</h3>
                                    <p>MÁS FLEXIBILIDAD, PRODUCTIVIDAD Y EFICIENCA</p>
                                    <p className="login-description-text">Es una solución inteligente para simplificar el uso y la gestión de los puestos de trabajo en entornos de «smart working ». 
                                    Los empleados pueden utilizar sus smartphones u otros dispositivos para encontrar un puesto libre y reservar salas de reuniones o puestos de trabajo que se ajusten a sus necesidades.
                                   </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{ mensaje}</Modal.Title>
                    </Modal.Header>
                        </Modal>
        </div>
        
    )
}

export default Login;

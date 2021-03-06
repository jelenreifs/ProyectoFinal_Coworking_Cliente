import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


import { useHistory } from "react-router-dom";

function AltaUsuario(props) {
     let history = useHistory();

    const [data, setData] = useState([]);
    const [dni, setDni] = useState('')
    const [foto, setFoto] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmfaerMMCR6jgdXwmlfYFycBhBCBKAXftOw&usqp=CAU')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [tfno, setTfno] = useState('')
    const [fechaAlta, setFechaAlta] = useState('')
    const [fechaBaja, setFechaBaja] = useState('')
    const [creditos, setCreditos] = useState('')
    const [password, setPassword] = useState('')
    const [administrador, setAdministrador] = useState(false)

    /* Modal */
    const [mensaje, setMensaje] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

    const handleChangeDni = (e) => {
        e.preventDefault();
        setDni(e.target.value)
    }
    const handleChangeFoto = (e) => {
        e.preventDefault();
        setFoto(e.target.value)
    }
    const handleChangeNombre = (e) => {
        e.preventDefault();
        setNombre(e.target.value)
    }
    const handleChangeApellido = (e) => {
        e.preventDefault();
        setApellido(e.target.value)
    }
    const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }
    const handleChangeTfno = (e) => {
        e.preventDefault();
        setTfno(e.target.value)
    }
    const handleChangeFechaAlta = (e) => {
        e.preventDefault();
        setFechaAlta(e.target.value)
    }
    const handleChangeFechaBaja = (e) => {
        e.preventDefault();
        setFechaBaja(e.target.value)
    }
    const handleChangeCreditos = (e) => {
        e.preventDefault();
        setCreditos(e.target.value)
    }
    const handleChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }


    const handleChangeAdministrador = () => {
        setAdministrador(!administrador);
    };



    /************************************************/
    /*                AÑADIR USUARIO               */
    /************************************************/

    const addUser = () => {
        fetch("/users/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    dni: dni,
                    foto: foto,
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    tfno: tfno,
                    fechaAlta: fechaAlta,
                    fechaBaja: fechaBaja,
                    creditos: parseInt(creditos),
                    password: password,
                    administrador: administrador
                }
            ),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    setMensaje(res.mensaje)
                    handleShow()
          
                } else {
                    setMensaje(res.mensaje)
                    setData(res);
                    handleShow()
                    setDni("");
                    setNombre("");
                    setApellido("");
                    setTfno("");
                    setEmail("");
                    setFechaAlta("");
                    setFechaBaja("");
                    setCreditos("");
                    setPassword("");
                    
                    
                }
            });
    }
    


    
    
    if (!props.logueado) {
		 history.push("/");	
	} else {


        return (
            <main className="bg-home content p-0">
                <div className="container-fluid p-0">
                    <div className="row vh-100 px-4">
                        <div className="col-xs-12 col-lg-4 px-4">
               
                            <div className="area-foto">
                                <img src={foto} alt="foto-usuario" />
                                <h5 className="text-white my-4">Cambiar foto</h5>
                            </div>
                            <div>
                            
                                <div className="row">
                                    <div className="col-xs-12">
                                        <label
                                            htmlFor="foto"
                                            className="form-label text-white">Foto</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="foto"
                                            placeholder="NuevaFoto"
                                            onChange={handleChangeFoto} />
                                    </div>
                                   
                    
                                </div>

                            </div>
                        </div>

                        <div className="col-xs-12 col-lg-8 bg-light">
                            <div className="col-xs-12">
                                <div className="col-xs-12">
                                    <div className="card mr-3">
                                        <div className="card-body">
                                            <h4 className="text-primary">Añadir usuario</h4>
                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nombre"
                                                        placeholder="nombre"
                                                        value={ nombre}
                                                        onChange={handleChangeNombre}
                                                        autocomplete="off" />
                                                    
                                                </div>
                                            
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="apellido"
                                                        placeholder="Apellido"
                                                         value={ apellido}
                                                        onChange={handleChangeApellido} />
                                                </div>
                                            </div>
                                        

                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="dni" className="form-label">DNI</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="dni"
                                                        placeholder="Ej:12345678P"
                                                         value={ dni}
                                                        onChange={handleChangeDni}
                                                        required
                                                    />
                                                  
                                                </div>
                                            
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="telefono"
                                                        placeholder="Ej:600123123"
                                                         value={ tfno}
                                                        onChange={handleChangeTfno} />
                                                </div>
                                            </div>

                                  
                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder="Ej:napellido@empresa.es"
                                                        value={ email}
                                                        autocomplete="off"
                                                        onChange={handleChangeEmail} />
                                                </div>
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="passsword" className="form-label">Password</label>
                                                    <input type="password"
                                                        className="form-control"
                                                        value={password}
                                                        id="password"
                                                        placeholder="password"
                                                        autocomplete="off"
                                                        onChange={handleChangePassword} />
                                                </div>
                                          
                                            </div>
                                        
                                            <div className="col-xs-12 separador"></div>
                                        
                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="alta" className="form-label">Fecha alta</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="alta"
                                                         value={ fechaAlta}
                                                        placeholder="fecha alta"
                                                         autocomplete="off"
                                                        onChange={handleChangeFechaAlta} />
                                                </div>
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="baja" className="form-label">Fecha baja</label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="baja"
                                                        placeholder="fecha baja"
                                                        value={fechaBaja}
                                                         autocomplete="off"
                                                        onChange={handleChangeFechaBaja} />
                                                </div>
                                            </div>
                                            
                                        
                                            <div className="row">
                                                <div className="col-xs-12 col-xl-2 mb-3 ">
                                                    <label htmlFor="creditos" className="form-label">Créditos</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="creditos"
                                                        placeholder="Créditos"
                                                        value={creditos}
                                                         autocomplete="off"
                                                        onChange={handleChangeCreditos} />
                                                </div>
                                        

                                                <div className="col-xs-6 col-xl-4 mb-3 d-flex align-items-end pl-4 pb-2">
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            value={administrador}
                                                            checked={administrador}
                                                            id="administrador"
                                                             autocomplete="off"
                                                            onChange={handleChangeAdministrador}
                                                        />
                                                    
                                                    <label className="form-check-label" htmlFor="administrador">
                                                            Administrador
                                                    </label>
                                                    </div>
                                                </div>
                                            </div>
                                        
                                            <div className="row justify-content-center my-3 px-3">
                                                <Button variant="btn btn-xs-block mt-4" onClick={addUser}>Registrar usuario</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{mensaje}</Modal.Title>
                    </Modal.Header>
                </Modal>
            </main>
        )
    }

}


export default AltaUsuario;

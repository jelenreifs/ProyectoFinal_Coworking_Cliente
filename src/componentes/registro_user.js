import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function RegistroUsuario() {
    const [data, setData] = useState([]);
    const [registro, setRegistro] = useState({
        dni: '',
        foto: '',
        nombre: '',
        apellido: '',
        email: '',
        tfno: '',
        fechaAlta: '',
        fechaBaja: '',
        creditos: '',
        password: '',
        administrador: ''
    })
/* Modal */
    const [mensaje, setMensaje] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const  {  dni, foto, nombre, apellido, email, tfno, fechaAlta, fechaBaja, creditos, password, administrador } = registro
  

const handleInputChange = (e) => {
    // console.log(e.target.name)
    // console.log(e.target.value)
    setRegistro({
        ...registro,
        [e.target.dni]: e.target.value,
        [e.target.foto] : e.target.value,
        [e.target.name] : e.target.value,
        [e.target.apellido] : e.target.value,
        [e.target.email] : e.target.value,
        [e.target.tfno] : e.target.value,
        [e.target.fechaAlta] : e.target.value,
        [e.target.fechaBaja] : e.target.value,
        [e.target.creditos] : e.target.value,
        [e.target.password] : e.target.value,
        [e.target.administrador] : e.target.value,
    })
}

 
const addUser = () => { 
    fetch("http://reservaPuesto/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
       // body: JSON.stringify({ dni, foto, nombre, apellido, email, tfno, fechaAlta, fechaBaja, creditos, password, administrador }),
        body: JSON.stringify(registro),
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
       }  
       });
  }


    return (
     <main className="bg-home content p-0">
            <div className="container-fluid p-0">
                <div className="row vh-100 px-4">
                    <div className="col-xs-12 col-lg-4 px-4">
                        <div className="area-foto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmfaerMMCR6jgdXwmlfYFycBhBCBKAXftOw&usqp=CAU" alt="foto-usuario" />
                            <h5 className="text-white my-4">Cambiar foto</h5>
                        </div>
                    <div>
                            
                        <div className="row">
                                <div className="col-xs-12">
                                    <label className="file-label" htmlFor="file-input">File:</label>
                                    <input type="file" name="attachment[]" multiple="multiple" onChange={ handleInputChange } /> 
                                        <small>Max size 10MB.</small>
                                </div>


                        <div className="col-xs-12 separador"></div>   
                                <div className="row credit">
                                     <div className="col-xs-6">
                                         <label htmlFor="creditos" className="form-label text-white">Créditos</label>
                                         <input type="number" className="form-control" id="creditos" placeholder="Créditos" onChange={ handleInputChange } />
                                        </div>
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
                                            <label htmlFor="dni" className="form-label">DNI</label>
                                            <input type="text" className="form-control" id="dni" placeholder="Ej:12345678P" onChange={ handleInputChange } />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="nombre" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="nombre"
                                                placeholder="nombre" onChange={ handleInputChange } />
                                        </div>
                                            
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="apellido" className="form-label">Apellido</label>
                                            <input type="text" className="form-control" id="apellido"
                                                placeholder="Apellido" onChange={ handleInputChange } />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6  mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Ej:napellido@empresa.es" onChange={ handleInputChange } />
                                            </div>
                                            
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                                            <input type="tel" className="form-control" id="telefono"
                                                placeholder="Ej:600123123" onChange={ handleInputChange } />
                                        </div>
                                        </div>
                                        
                                    <div className="col-xs-12 separador"></div>
                                        
                                    <div className="row">
                                        <div className="col-xs-6 col-xl-6 mb-3">
                                            <label htmlFor="alta" className="form-label">Fecha alta</label>
                                            <input type="date" className="form-control" id="alta"
                                                placeholder="fecha alta" onChange={ handleInputChange } />
                                        </div>
                                        <div className="col-xs-6 col-xl-6 mb-3">
                                            <label htmlFor="baja" className="form-label">Fecha baja</label>
                                            <input type="date" className="form-control" id="baja" placeholder="fecha baja" onChange={ handleInputChange } />
                                        </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-xs-12 my-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="true" id="administrador" onChange={ handleInputChange } />
                                                    <label className="form-check-label" htmlFor="administrador">
                                                        Administrador
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    <div className="row justify-content-center my-3 px-3">
                                        <Button variant="btn btn-xs-block mt-4" onClick={addUser}>Login</Button>
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
                    <Modal.Title>{ mensaje}</Modal.Title>
                    </Modal.Header>
                        </Modal>
    </main>
    )
}


export default RegistroUsuario;

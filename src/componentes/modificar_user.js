import React from 'react';
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useHistory, useParams} from "react-router-dom";

function ModificarUsuario(props) {
     let history = useHistory();
    
    const [data, setData] = useState([]);
    const [dni, setDni] = useState("")
    const [foto, setFoto] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [tfno, setTfno] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { id } = useParams();

 
  
    /* Modal */
    const [mensaje, setMensaje] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





/************************************************/
/*                 USUARIO                    */
/************************************************/
    
      useEffect(() => {
        fetch("/users/usuario/" + id)
            .then((res) => res.json())
            .then((res) => {
                setDni(res.datos[0].dni);
                console.log(res)
            });
      }, [id]);
    

    


    const updateUser = () => {
        fetch("/users/update", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    email: email,
                    dni: dni,
                    foto: foto,
                    nombre: nombre,
                    apellido: apellido,
                    tfno: tfno,
                    password: password,
         
                }
            ),
        })
            .then(res => res.json())
            .then(res => {
                if (res.error === true) {
                    setMensaje(res.mensaje)
                    handleShow()
                    console.log(res.mensaje)
          
                } else {
                    setMensaje(res.mensaje)
                    setData(res.datos);
                    console.log(res.datos)
                    handleShow()
                }
            });
    }



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

    const handleChangeTfno = (e) => {
        e.preventDefault();
        setTfno(e.target.value)
    }

      const handleChangeEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }



/*     if (!props.logueado) {
        return <Redirect  exact to="/" />
    } else { */

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
                                            <h4 className="text-primary">Configuración de usuario</h4>
                                        
                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nombre"
                                                        placeholder={nombre}
                                                        onChange={handleChangeNombre}
                                                    />
                                                </div>
                                            
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="apellido" className="form-label">Apellido</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="apellido"
                                                        placeholder={apellido}
                                                        onChange={handleChangeApellido}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="dni" className="form-label">DNI</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="dni"
                                                        placeholder={dni}
                                                        value={dni}
                                                        onChange={handleChangeDni}
                                                    />
                                                </div>
                                            
                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="telefono" className="form-label">Teléfono</label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="telefono"
                                                        placeholder={tfno}
                                                        onChange={handleChangeTfno}
                                                    />
                                                </div>
                                            </div>

                                  

                                            <div className="row">
                                                <div className="col-xs-6 col-xl-6  mb-3">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        type="email"
                                                        autocomplete="off"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder={email}
                                                        onChange={handleChangeEmail}
                                                    />
                                                </div>

                                                <div className="col-xs-6 col-xl-6 mb-3">
                                                    <label htmlFor="passsword" className="form-label">Password</label>
                                                    <input type="password"
                                                        autocomplete="off"
                                                        className="form-control"
                                                        id="passwors"
                                                        placeholder="password"
                                                        onChange={handleChangePassword} />
                                                </div>
                                       
                                            </div>
                                        

                                            <div className="row justify-content-center my-3 px-3">
                                                <Button variant="btn btn-xs-block  mt-4" onClick={updateUser}>Actualizar Perfil</Button>
                                            </div>

                                            
                     
                                        </div>
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
            </main>
        )
    }
}


export default ModificarUsuario;

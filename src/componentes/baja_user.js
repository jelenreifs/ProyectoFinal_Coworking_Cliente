import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function BajaUsuario() {
    const [data, setData] = useState([]);
    

    /* Modal */
    const [mensaje, setMensaje] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


/*******************************************/
/*             Montrar usuarios            */
/*******************************************/
  useEffect(() => {
    fetch("/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
    
    const usuarios = data.map((usuario, index) => {
        return (
            <tr key={index}>
                <td><img src={usuario.foto} alt="foto-user" width="500" height="600" /> </td>
                <td>{usuario.dni}</td>
                <td>{usuario.nombre} {usuario.apellido}</td>
                <td >
                    <Link to={usuario.email}>
                        {usuario.email}
                    </Link>
                </td>
                <td className="d-xs-none">{usuario.fechaAlta}</td>
                <td className="d-flex justify-content-center">
                    <img src="./img/icons/trash.svg" alt="ico-eliminar"/> 
                </td>
            </tr>
        )
    })
    

/*******************************************/
/*             ELIMINAR USUARIO            */
/*******************************************/
    
/* const deleteUser = () => { 
    fetch("/users/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
        body: JSON.stringify({
            dni: dni
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
        setData(res.datos);
        handleShow()
       }  
       });
    }
     */
    


    

    return (
        <main className="bg-home content p-0">
			<div className="container-fluid p-0">
                <div className="row vh-100 px-4">
                    <div className="col-12 col-xl-12">
                         <h3 className="text-white">Baja de usuario</h3>
                        <div className="card">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Foto</th>
                                        <th>Dni</th>
                                        <th>Nombre Apellido</th>
                                        <th className="d-none d-md-table-cell d-xs-none">Email</th>
                                        <th className="d-xs-none">Fecha Alta</th>
                                        <th className="d-flex justify-content-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios}
                                </tbody>
                            </table>
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


export default BajaUsuario;

import React from 'react';
import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

//import { Button } from 'react-bootstrap';
//import { Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function BajaUsuario() {
    const [data, setData] = useState([]);


 /*******************************************/
/*          Montrar usuarios         */
/******************************************/
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
                <td>{usuario.dni}</td>
                <td>{usuario.nombre} {usuario.apellido}</td>
                <td className="d-xs-none">
                    <Link to={usuario.email}>
                        {usuario.email}
                    </Link>
                </td>
                <td className="d-xs-none">{usuario.fechaAlta}</td>
                <td className="d-flex justify-content-center">
                    <img src="./img/icons/trash.svg" alt="ico-home" /> 
                </td>
            </tr>
        )
     })

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
		</main>
    )
}


export default BajaUsuario;

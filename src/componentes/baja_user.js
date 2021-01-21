import React from 'react';


import { Button } from 'react-bootstrap';
//import { Modal } from 'react-bootstrap';
//import { Link } from 'react-router-dom';

function BajaUsuario() {


    return (
        <main className="bg-home content p-0">
			<div className="container-fluid p-0">
                <div className="row vh-100 px-4">
                    <div className="col-12 col-xl-12">
                         <h3 className="text-white">Baja de usuario</h3>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Baja de usuario</h5>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Dni</th>
                                        <th>Nombre Apellido</th>
                                        <th className="d-none d-md-table-cell">Email</th>
                                        <th>Fecha Alta</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12345678</td>
                                        <td>Pepe López</td>
                                        <td className="d-none d-md-table-cell">plopez@coworking.es</td>
                                        <td>12-34-56</td>
                                        <td className="table-action">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-2 align-middle">
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash align-middle">
                                                    <polyline points="3 6 5 6 21 6">
                                                    </polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                                    </path>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                   
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

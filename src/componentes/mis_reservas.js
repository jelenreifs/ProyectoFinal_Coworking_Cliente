import React from 'react';


function MisReservas() {


    return (
        <main className="bg-home content p-0">
			<div className="container-fluid p-0">
                <div className="row vh-100 px-4">
                    <div className="col-12 col-xl-12">
                         <h3 className="text-white">Mis reservas</h3>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Reservas de puestos</h5>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Puesto</th>
                                        <th>Creditos</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>12-34-56</td>
                                        <td>Puesto</td>
                                        <td>234</td>
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


export default MisReservas;

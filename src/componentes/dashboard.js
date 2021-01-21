import React from 'react';
import { useState, useEffect } from "react";
//import Chart from "react-apexcharts";



function Dashboard() {
 
    const [data, setData] = useState([]);
    

/************************************************/
/*          MOSTRAR TODAS LAS RESERVAS          */
/************************************************/
useEffect(() => {
    fetch("/reservaPuesto")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);


   const reservas = data.map((reserva, index) => {
      return (
          <ul key={ index}>
            <li >{ reserva.nombre} { reserva.apellido} </li>
            <li> Puesto: {reserva.puesto} </li>
            <li> Hora: {reserva.hora} </li>
          </ul>
          
       )
   })



/************************************************/
/*          MOSTRAR DATOS GRAFICOS          */
/************************************************/

 
 return (
    <main className="bg-registro1 content p-0">
        <div className="container-fluid p-0">
            <div className="row vh-100">
                <div className="col-xs-12 col-lg-8 p-4">
                    <div className="row">
                        <h3 className="text-white">Dashboard</h3>
                    </div>
                     <div className="row">
                        <div className="col-xs-12 col-xl-6">
                            <div className="card mt-3 mr-3">
                                <div className="card-body">
                                    <h5 className="card-title">Grafica 1</h5>
                                    <p className="card-text">
                                        Gráfico 1
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-xl-6">
                            <div className="card mt-3 mr-3">
                                <div className="card-body">
                                    <h5 className="card-title">Grafica 2</h5>
                                    <p className="card-text">
                                        Gráfico 2
                                    </p>
                                </div>
                            </div>
                        </div>

					</div>
                </div>

                <div className="col-xs-12 col-lg-4 bg-lidht">
                     <h5 className="card-title">Historial de reservas</h5>
                     { reservas }
                </div>
            </div>
        </div>
    </main>
    )
}

export default Dashboard;



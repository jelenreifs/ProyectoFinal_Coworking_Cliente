import React from 'react';
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts'



function Dashboard() {

    let series = [{
      name: 'Puestos',
      data: [],
        }] ; 


    let options = {
        chart: {
            height: 240,
            type: 'bar',
        },
        plotOptions: {
            bar: {
            dataLabels: {
                position: 'top', // top, center, bottom
            },
            }
        },
    };

    const [chart, setChart] = useState(options);
    const [datosChart, setDatosChart] = useState(series);
    const [data, setData] = useState([]);




/************************************************/
/*          MOSTRAR HISTORIAL DE RESERVAS          */
/************************************************/
useEffect(() => {
    fetch("/reservaPuesto")
      .then((res) => res.json())
        .then((res) => {
            const mostrarPuestos = res.map(item => item.id)
                setDatosChart([{
                name: 'Puestos',
                data: mostrarPuestos }])
        setData(res);
      });
  }, []);


   const reservas = data.map((reserva, index) => {
      return (
          <div key={ index} className="reservas">
            <h5>{reserva.nombre} {reserva.apellido}</h5>
              <div className="d-flex justify-content-sm-left justify-content-lg-between">
                <p> Puesto: <span>{reserva.id}</span> </p>
                <p> Hora:<span> {reserva.fecha}</span> </p>
            </div>
          </div>
          
       )
   })



/************************************************/
/*          MOSTRAR DATOS GRAFICOS          */
/************************************************/

 
 return (
    <main className="bg-registro1 content p-0">
        <div className="container-fluid p-0">
            <div className="row vh-100">
                <div className="col-xs-12 col-lg-9 p-4">
                    <div className="row">
                        <h3 className="text-white">Dashboard</h3>
                    </div>
                     <div className="row">
                        <div className="col-xs-12 col-xl-6">
                            <div className="card mt-3 mr-3">
                                <div className="card-body">
                                    <h5 className="card-title">Los meses más reservados</h5>
                                     <div className="card-grafico">
                                        <Chart
                                        options={chart}
                                        series={datosChart}
                                        type="bar"
                                        width="480"
                                    />
                                    </div>
                                <div>
                            </div>
                        </div>
    
                        </div>
                         </div>
                         

                             <div className="col-xs-12 col-xl-6">
                            <div className="card mt-3 mr-3">
                                <div className="card-body">
                                    <h5 className="card-title">Los puestos más reservados</h5>
                                     <div className="card-grafico">
                                        <Chart
                                        options={chart}
                                        series={datosChart}
                                        type="bar"
                                        width="480"
                                    />
                                    </div>
                                <div>
                            </div>
                        </div>
                        </div>
                        </div>
					</div>
                </div>

                <div className="col-xs-12 col-lg-3 bg-light aside">
                     <h4>Historial de reservas</h4>
                     { reservas }
                </div>
            </div>
        </div>
    </main>
    )
}

export default Dashboard;



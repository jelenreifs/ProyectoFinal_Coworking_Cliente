import React from 'react';
import { useState, useEffect } from "react";
//import moment from 'moment';
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom";


function Dashboard(props) {
    let history = useHistory();
    
   
    const [data, setData] = useState([]);
  
       let series = [{
        name: 'Puestos',
        data: [],
    }];


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





/************************************************/
/*          MOSTRAR HISTORIAL DE RESERVAS          */
/************************************************/
    useEffect(() => {
        fetch("/reservaPuesto")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    }, []);





/*    Map del istado     */

    const reservas = data.map((reserva, index) => {
        return (
            <div key={index} className="reservas">
                <h5>{reserva.nombre} {reserva.apellido}</h5>
                <div className="d-flex justify-content-sm-left justify-content-lg-between">
                    <p className="fecha"> Día:<span> {reserva.fecha}</span> </p>
                    <p className="usuario"> Puesto: 
                        {(reserva.puestos.filter(puesto => puesto.estado === "ocupado").map(item => {
                            return (
                                <span>
                                    <p>{item.id}: </p>
                                    <p>{item.nombre} {item.apellido} </p>
                                </span>
                            )
                         })
                         )}
                   </p>
                </div>
            </div>
        )
    })



 /*    if (!props.logueado) {
        return <Redirect  exact to="/" />
    } else { */

        if (!props.logueado) {
		 history.push("/");	
	} else {

 
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
                            {reservas}
                        </div>
                    </div>
                </div>
            </main>
        )
    }

}

export default Dashboard;



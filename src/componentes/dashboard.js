import React from 'react';
import { useState, useEffect } from "react";
import moment from 'moment';
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom";


function Dashboard(props) {
    let history = useHistory();
    
   
    const [data, setData] = useState([]);


    let arrayMeses = [] 
    let arrayMeses2 = [] 
  
    let series1 = [{
        name: 'Puestos',
        data: arrayMeses,
    }];

    let series2 = [{
        name: 'Puestos',
        data: arrayMeses2,
    }];

    let options1 = {
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
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              }
    };

    let options2 = {
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
            xaxis: {
                categories: ["M01-1", "M01-6", "M01-2", "M02-1", "M03-1", "M04-4","M04-6", "M05-5", "M05-4", "M05-4", "M05-6","M06-1"],
                position: 'top',
                axisBorder: {
                  show: false
                },
                axisTicks: {
                  show: false
                },
                crosshairs: {
                  fill: {
                    type: 'gradient',
                    gradient: {
                      colorFrom: '#D8E3F0',
                      colorTo: '#BED1E6',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5,
                    }
                  }
                },
                tooltip: {
                  enabled: true,
                }
              }
    };
 
   const [chart, setChart] = useState(options1);
   const [chart2, setChart2] = useState(options2);
/*     const [datosChart, setDatosChart] = useState(series);*/

    const [datosChart, setDatosChart] = useState(series1);
    const [datosChart2, setDatosChart2] = useState(series2);

    console.log(datosChart)

 



/************************************************/
/*          MOSTRAR HISTORIAL DE RESERVAS          */
/************************************************/
    useEffect(() => {
        fetch("/reservaPuesto")
            .then((res) => res.json())
            .then((res) => {
                setData(res)            
            });
    }, []);


    
/* Enero */
/* const reservaEne = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "01");
const puestosEne = reservaEne[0].puestos.filter(puesto => puesto.estado === "ocupado");
const numPuestosEne = puestosEne.length;
console.log(numPuestosEne)  */

    
/* Febrero */
/* const reservaFeb = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "02")
const puestosFeb = reservaFeb[0].puestos.filter(puesto=> puesto.estado === "ocupado");
const numPuestosFeb = puestosFeb.length; 
console.log(numPuestosFeb) */
    
    /* Marzo */
/* const reservaMar = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "03")
const puestosMar = reservaMar[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosMar = puestosMar.length;
    console.log(numPuestosMar) */
    
/* Abril */
/* const reservaAbr = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "04")
const puestosAbr = reservaAbr[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosAbr = puestosAbr.length;
    console.log(numPuestosAbr) */
    
/* Mayo */
/* const reservaMay = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "05")
const puestosMay = reservaMay[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosMay = puestosMay.length;
    console.log(numPuestosMay) */
    
/* Junio */
/* const reservaJun = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "06")
const puestosJun = reservaJun[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosJun = puestosJun.length;
    console.log(numPuestosJun) */
 
/* Julio */
/* const reservaJul = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "07")
const puestosJul = reservaJul[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosJul = puestosJul.length;
    console.log(numPuestosJul) */
 
/* Agosto */
/* const reservaAgo = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "08")
const puestosAgo = reservaAgo[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosAgo = puestosAgo.length;
    console.log(numPuestosAgo) */
 
/* Septiembre */
/* const reservaSep = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "09")
const puestosSep = reservaSep[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosSep = puestosSep.length;
    console.log(numPuestosSep) */
 
/* Octubre */
/* const reservaOct = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "10")
const puestosOct = reservaOct[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosOct = puestosOct.length;
    console.log(numPuestosOct) */
 
/* Noviembre */
/* const reservaNov = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "11")
const puestosNov = reservaNov[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosNov = puestosNov.length;
    console.log(numPuestosNov) */
 
/* Diciembre */
/* const reservaDic = data.filter(reserva => moment(reserva.fecha, "DD/MM/YYYY").format("MM") === "12")
const puestosDic = reservaDic[0].puestos.filter(puesto=> puesto.estado === "ocupado");
    const numPuestosDic = puestosDic.length;
    console.log(numPuestosDic) */

 
   
//arrayMeses.push( numPuestosEne,  numPuestosFeb, numPuestosMar, numPuestosAbr, numPuestosMay, numPuestosJun, numPuestosJul, numPuestosAgo, numPuestosSep, numPuestosOct, numPuestosNov, numPuestosDic); 
arrayMeses.push(2,3,1,4,6,23,27,9,12,32,34,22); 
arrayMeses2.push(45, 32, 28, 23, 40, 47, 32, 40, 32 ,50, 24, 39); 



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
                                <div className="col-xs-12 col-xl-12 col-xxl-6">
                                    <div className="card mt-3 mr-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Los meses más reservados</h5>
                                            <div className="card-grafico grafico1">
                                                
                                                <Chart
                                                    options={chart}
                                                    series={datosChart}
                                                    type="bar"
                                                    max-width="100%"
                                                />
                                                
                                                
                                            </div>
                                            <div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                         

                                <div className="col-xs-12 col-xl-12 col-xxl-6">
                                    <div className="card mt-3 mr-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Los puestos más reservados</h5>
                                            <div className="card-grafico grafico2">
                                                 <Chart
                                                    options={chart2}
                                                    /*  series={datosChart} */
                                                     series={datosChart2}
                                                    type="bar"
                                                     max-width="100%"
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



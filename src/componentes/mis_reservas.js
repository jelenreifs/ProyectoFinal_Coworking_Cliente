import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


function MisReservas(props) {
   let history = useHistory();


  const [data, setData] = useState([]);


  /*******************************************/
  /*             Montrar usuarios            */
  /*******************************************/
  useEffect(() => {
    fetch("/reservaPuesto")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);
  
 
  const userLogueado = data.filter(element => element.dni === props.dataUser.dni);
  const reservasUser = userLogueado.map(item =>
    <tr>
      <td> {item.fecha} </td>
      <td> {item.id} </td>
      <td> {props.dataUser.creditos} </td>
    </tr>
  )
  


/*   if (!props.logueado) {
    return <Redirect exact to="/" />
          
  } else { */

    if (!props.logueado) {
		 history.push("/");	
	} else {

    
    return (
      <main className="bg-home content p-0">
        <div className="container-fluid p-0">
          <div className="row vh-100 px-4">
            <div className="col-12 col-xl-12">
              <h3 className="text-white">Mis reservas</h3>
              <div className="card">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Puesto</th>
                      <th>Creditos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reservasUser}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    )
  }
}


export default MisReservas;

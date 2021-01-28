import React from "react";
import "./plano.css";


function Plano(props) {
  console.log(props);
 
 

  const puestos = props.asientos.map((asiento) => {
    if (asiento.id === "M1-6") {
      return (
        <g
          id="Mesa1-6"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 -1 1 0 21.70412979586411 151.20997823982336) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-6"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M41.2,20.3c0,4.4-2.1,6.6-6.2,6.6H22.7c-4.1,0-6.2-2.2-6.2-6.6V7c0-4.4,2-6.6,6.2-6.6H35
        			c4.1,0,6.2,2.2,6.2,6.6V20.3L41.2,20.3z"
          />
          <path
            className="st13"
            d="M18.1,13.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
        			c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C18.2,18.3,18.1,15.9,18.1,13.6L18.1,13.6z"
          />
          <path
            className="st47"
            d="M33.6,0.1c0,2.1-1,3.1-2.9,3.1H23c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C32.6-3,33.6-2,33.6,0.1
        			L33.6,0.1z"
          />
          <path
            className="st47"
            d="M33.7,27.1c0,2.1-1,3.1-2.9,3.1h-7.7c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C32.7,24,33.7,25,33.7,27.1
        			L33.7,27.1z"
          />
        </g>
      );
    } else if (asiento.id === "M1-5") {
      return (
        <g
          id="Mesa1-5"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 -1 1 0 98.5793881402481 150.49152646901337) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-5"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M41.2,20.3c0,4.4-2.1,6.6-6.2,6.6H22.7c-4.1,0-6.2-2.2-6.2-6.6V7c0-4.4,2-6.6,6.2-6.6H35
        c4.1,0,6.2,2.2,6.2,6.6V20.3L41.2,20.3z"
          />
          <path
            className="st13"
            d="M18.1,13.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
        c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C18.2,18.3,18.1,15.9,18.1,13.6L18.1,13.6z"
          />
          <path
            className="st47"
            d="M33.6,0.1c0,2.1-1,3.1-2.9,3.1H23c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C32.6-3,33.6-2,33.6,0.1
        L33.6,0.1z"
          />
          <path
            className="st47"
            d="M33.7,27.1c0,2.1-1,3.1-2.9,3.1h-7.7c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C32.7,24,33.7,25,33.7,27.1
        L33.7,27.1z"
          />
        </g>
      );
    } else if (asiento.id === "M1-4") {
      return (
        <g
          id="Mesa1-4"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 -1 1 0 174.9805295159482 151.20997823982356) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-4"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M41.2,20.3c0,4.4-2.1,6.6-6.2,6.6H22.7c-4.1,0-6.2-2.2-6.2-6.6V7c0-4.4,2-6.6,6.2-6.6H35
        c4.1,0,6.2,2.2,6.2,6.6V20.3L41.2,20.3z"
          />
          <path
            className="st13"
            d="M18.1,13.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
        c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C18.2,18.3,18.1,15.9,18.1,13.6L18.1,13.6z"
          />
          <path
            className="st47"
            d="M33.6,0.1c0,2.1-1,3.1-2.9,3.1H23c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C32.6-3,33.6-2,33.6,0.1
        L33.6,0.1z"
          />
          <path
            className="st47"
            d="M33.7,27.1c0,2.1-1,3.1-2.9,3.1h-7.7c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C32.7,24,33.7,25,33.7,27.1
        L33.7,27.1z"
          />
        </g>
      );
    } else if (asiento.id === "M1-3") {
      return (
        <g
          id="Mesa1-3"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 1 -1 0 208.2104697842638 0) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-3"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M21.2,26.3c0,4.4-2.1,6.6-6.2,6.6H2.7c-4.1,0-6.2-2.2-6.2-6.6V13c0-4.4,2-6.6,6.2-6.6H15
          c4.1,0,6.2,2.2,6.2,6.6V26.3L21.2,26.3z"
          />
          <path
            className="st13"
            d="M-1.9,19.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
          c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C-1.8,24.3-1.9,21.9-1.9,19.6L-1.9,19.6z"
          />
          <path
            className="st47"
            d="M13.6,6.1c0,2.1-1,3.1-2.9,3.1H3c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C12.6,3,13.6,4,13.6,6.1
          L13.6,6.1z"
          />
          <path
            className="st47"
            d="M13.7,33.1c0,2.1-1,3.1-2.9,3.1H3.1c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C12.7,30,13.7,31,13.7,33.1
          L13.7,33.1z"
          />
        </g>
      );
    } else if (asiento.id === "M1-2") {
      return (
        <g
          id="Mesa1-2"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 1 -1 0 131.33521143988003 0.7184517708094518) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-2"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M21.2,26.3c0,4.4-2.1,6.6-6.2,6.6H2.7c-4.1,0-6.2-2.2-6.2-6.6V13c0-4.4,2-6.6,6.2-6.6H15
          c4.1,0,6.2,2.2,6.2,6.6V26.3L21.2,26.3z"
          />
          <path
            className="st13"
            d="M-1.9,19.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
          c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C-1.8,24.3-1.9,21.9-1.9,19.6L-1.9,19.6z"
          />
          <path
            className="st47"
            d="M13.6,6.1c0,2.1-1,3.1-2.9,3.1H3c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C12.6,3,13.6,4,13.6,6.1
          L13.6,6.1z"
          />
          <path
            className="st47"
            d="M13.7,33.1c0,2.1-1,3.1-2.9,3.1H3.1c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C12.7,30,13.7,31,13.7,33.1
          L13.7,33.1z"
          />
        </g>
      );
    } else if (asiento.id === "M1-1") {
      return (
        <g
          id="Mesa1-1"
          transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(0 1 -1 0 54.93407006417888 0) matrix(1 0 0 1 0 0)"
        >
          <path
            id="M1-1"
            className={asiento.estado}
            onClick={props.manejarEstado}
            d="M21.2,26.3c0,4.4-2.1,6.6-6.2,6.6H2.7c-4.1,0-6.2-2.2-6.2-6.6V13c0-4.4,2-6.6,6.2-6.6H15
        			c4.1,0,6.2,2.2,6.2,6.6V26.3L21.2,26.3z"
          />
          <path
            className="st13"
            d="M-1.9,19.6c0-2.2,0.2-4.6,0.5-7.3s0.5-4,0.5-3.9c-0.1-2-1-3-2.8-3c-0.9,0-1.3,0-1.2,0c-3.3,0-5,4.8-4.9,14.2
        			c0,9.5,1.7,14.3,5,14.3c0.9,0,1.3,0,1.2,0c1.8,0,2.7-1,2.7-3.1c0,0.1-0.2-1.2-0.5-3.9C-1.8,24.3-1.9,21.9-1.9,19.6L-1.9,19.6z"
          />
          <path
            className="st47"
            d="M13.6,6.1c0,2.1-1,3.1-2.9,3.1H3c-1.9,0-2.9-1-2.9-3.1c0-2,1-3.1,2.9-3.1h7.7C12.6,3,13.6,4,13.6,6.1
        			L13.6,6.1z"
          />
          <path
            className="st47"
            d="M13.7,33.1c0,2.1-1,3.1-2.9,3.1H3.1c-1.9,0-2.9-1-2.9-3.1s1-3.1,2.9-3.1h7.7C12.7,30,13.7,31,13.7,33.1
        			L13.7,33.1z"
          />
        </g>
      );
    }
  });
  


  return (
      <div className="plano-wrapper">
        <svg
          version="1.1"
          id="merged-svg-layer"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1501 1010"
        >
          <g
            id="Mesa_1"
            transform="matrix(1 0 0 1 0 0) matrix(1 0 0 1 0 0) matrix(1 0 0 1 103.24718649469925 63) matrix(1 0 0 1 0 0)"
          >
            <path
              id="Mesa03_x5F_Puesto3"
              className="st37"
              d="M150.3,29.6c0-0.9,0.9-1.3,2.6-1.3h71.4c1.7,0,2.6,0.4,2.6,1.3v69.2
        		c0,0.9-0.9,1.3-2.6,1.3h-71.4c-1.7,0-2.6-0.4-2.6-1.3L150.3,29.6L150.3,29.6z"
            />
            <path
              id="Mesa02_x5F_Puesto2"
              className="st37"
              d="M73.6,29.6c0-0.9,0.9-1.3,2.6-1.3h71.4c1.7,0,2.6,0.4,2.6,1.3v69.2
        		c0,0.9-0.9,1.3-2.6,1.3H76.2c-1.7,0-2.6-0.4-2.6-1.3V29.6L73.6,29.6z"
            />
            <path
              id="Mesa01_x5F_Puesto1"
              className="st37"
              d="M-3,29.6c0-0.9,0.9-1.3,2.6-1.3H71c1.7,0,2.6,0.4,2.6,1.3v69.2
        		c0,0.9-0.9,1.3-2.6,1.3H-0.4c-1.7,0-2.6-0.4-2.6-1.3V29.6L-3,29.6z"
            />
            {puestos}
          </g>
          <g id="Num_x5F_Reunion_x5F_03">
            <g>
              <text
                transform="matrix(1 0 0 1 1345.3821 811.1295)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1397.8717 811.1293)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1345.3817 908.2713)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1345.3821 860.1295)"
                className="st50 st51"
              >
                7
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1397.8717 860.1293)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1397.8718 908.2708)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1264.4805 988.4113)"
                className="st52 st50 st51"
              >
                RE3
            </text>
            </g>
          </g>
          <g id="Num_x5F_Reunion_x5F_02">
            <g>
              <text
                transform="matrix(1 0 0 1 952.6815 558.39)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 912.5648 599.5877)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 952.6813 599.5873)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 912.5654 558.3905)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <text
              transform="matrix(1 0 0 1 829.998 657.9686)"
              className="st52 st50 st51"
            >
              RE2
          </text>
          </g>
          <g id="Num_x5F_Reunion_x5F_01">
            <g>
              <text
                transform="matrix(1 0 0 1 372.9781 553.569)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 431.818 553.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 490.6581 553.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 372.9781 604.569)"
                className="st50 st51"
              >
                7
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 431.818 604.5688)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 489.6581 604.569)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 515.2247 578.2861)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 347.4711 578.2869)"
                className="st50 st51"
              >
                8
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 250.9199 657.9686)"
                className="st52 st50 st51"
              >
                RE1
            </text>
            </g>
          </g>
          <g id="Num_x5F_MesasEquipo">
            <g>
              <text
                transform="matrix(1 0 0 1 273.9781 848.569)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 346.818 848.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 421.6581 848.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 816.1381 848.569)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 890.0219 848.569)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 963.9053 848.5688)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 273.9781 889.569)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 346.818 889.5688)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 421.6581 889.569)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 816.1381 889.569)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 890.0219 889.569)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 963.9053 889.5688)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <text
              transform="matrix(1 0 0 1 178.9199 868.9686)"
              className="st52 st50 st51"
            >
              EQ1
          </text>
            <text
              transform="matrix(1 0 0 1 718.998 868.9686)"
              className="st52 st50 st51"
            >
              EQ2
          </text>
          </g>
          <g id="Num_x5F_Mesas">
            <g>
              <text
                transform="matrix(1 0 0 1 131.9781 113.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 208.818 113.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 285.6581 113.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 452.1381 113.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 529.0219 113.5689)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 605.9053 113.5688)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 838.9051 113.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 916.125 113.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 993.3451 113.5687)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1159.4498 113.5687)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1235.9099 113.5686)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1312.3698 113.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 131.9781 154.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 208.818 154.5688)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 285.6581 154.569)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 452.1381 154.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 529.0219 154.5689)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 605.9053 154.5688)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 838.9051 154.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 916.125 154.5688)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 993.3451 154.5687)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1159.4498 154.5687)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1235.9099 154.5686)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1312.3698 154.569)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 131.9781 324.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 208.818 324.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 285.6581 324.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 452.1381 324.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 529.0219 324.5689)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 605.9053 324.5688)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 838.9051 324.5689)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 916.125 324.5688)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 993.3451 324.5687)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1159.4498 324.5687)"
                className="st50 st51"
              >
                1
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1235.9099 324.5686)"
                className="st50 st51"
              >
                2
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1312.3698 324.569)"
                className="st50 st51"
              >
                3
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 131.9781 365.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 208.818 365.5688)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 285.6581 365.569)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 452.1381 365.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 529.0219 365.5689)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 605.9053 365.5688)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 838.9051 365.5689)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 916.125 365.5688)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 993.3451 365.5687)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1159.4498 365.5687)"
                className="st50 st51"
              >
                6
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1235.9099 365.5686)"
                className="st50 st51"
              >
                5
            </text>
            </g>
            <g>
              <text
                transform="matrix(1 0 0 1 1312.3698 365.569)"
                className="st50 st51"
              >
                4
            </text>
            </g>
            <text
              transform="matrix(1 0 0 1 55.9199 133.9686)"
              className="st52 st50 st51"
            >
              M1
          </text>
            <text
              transform="matrix(1 0 0 1 376.9981 133.9685)"
              className="st52 st50 st51"
            >
              M2
          </text>
            <text
              transform="matrix(1 0 0 1 763.3181 133.9688)"
              className="st52 st50 st51"
            >
              M3
          </text>
            <text
              transform="matrix(1 0 0 1 1083.1581 133.9687)"
              className="st52 st50 st51"
            >
              M4
          </text>
            <text
              transform="matrix(1 0 0 1 1083.0566 347.8714)"
              className="st52 st50 st51"
            >
              M5
          </text>
            <text
              transform="matrix(1 0 0 1 764.1051 347.8713)"
              className="st52 st50 st51"
            >
              M6
          </text>
            <text
              transform="matrix(1 0 0 1 377.3243 347.8712)"
              className="st52 st50 st51"
            >
              M7
          </text>
            <text
              transform="matrix(1 0 0 1 56.1643 347.8712)"
              className="st52 st50 st51"
            >
              M8
          </text>
          </g>
        </svg>
      </div>
    );
  
}

export default Plano;

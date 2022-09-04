/* 
import ‘../../styles/clock.scss’;

class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: ‘Martín’,
         apellidos: ‘San José’
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock;

Partiendo del siguiente componente de clase que contempla 
varios métodos de ciclo de vida, convertidlo en un componente 
funcional que realice exactamente lo mismo:
*/

import React, { useState, useEffect } from 'react';

const Clock = () => {
    const estadoInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    };

    const [info, setInfo] = useState(estadoInicial);

    useEffect(() => {
        //actualizacion del componente
        const setTimer = setInterval(() => {
            tick();
        }, 1000);
        //componente va a desaparecer
        return () => {
            clearInterval(setTimer);
        };
    });

    const tick = () => {
        //cambia el estado
        return setInfo({
            fecha: info.fecha,
            edad: info.edad + 1,
            nombre: info.nombre,
            apellidos: info.apellidos,
        });
    };

    return (
        <div>
            <h2>
                Hora Actual:
                {info.fecha.toLocaleTimeString()}
            </h2>
            <h3> {info.nombre} {info.apellidos}</h3>
            <h1>Edad: {info.edad}</h1>
        </div>
    );
};

export default Clock;

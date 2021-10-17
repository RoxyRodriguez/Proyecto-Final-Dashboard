import React , { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Calendar from 'react-calendar';
import { getHoraDisponible } from "../../../conexion/conexionHora";

const transformaFechaServidor = (fecha)=>{
  let arrayfecha = fecha.split('/');
  return arrayfecha[2]+'-'+arrayfecha[1]+'-'+arrayfecha[0];
}

const CitaCita = ({recibeFechaPedido, recibeHoraPedido,fecha}) => {

    fecha = transformaFechaServidor(fecha);
    
    const [date, setDate] = useState(new Date());
    const [horas, setHoras] = useState([]);

    useEffect(() => {
      getHoraDisponible(fecha).then((hora) => {
        setHoras(hora);
      });
  
    }, [fecha]);


    const onChange = (date) => {
      setDate(date);
      recibeFechaPedido(date.toLocaleDateString());
      recibeHoraPedido('', '', '');
    };
  

  return (
    <>
      <Calendar
        onChange={onChange}
        value={date}
      />
      <div className="citaHorario">
      {
          horas.map((objHoras)=>{
            return (!objHoras.inhabilitado)?
            (<button type="button" name={objHoras.id} className="citaBtnHorario" key={objHoras.id} onClick={()=>{
              recibeHoraPedido(objHoras.id, objHoras.hora_inicio, objHoras.hora_fin);
          }} >{objHoras.hora_inicio} - {objHoras.hora_fin}</button>):
          (<button type="button" name={objHoras.id} className="citaBtnHorario" key={objHoras.id} onClick={()=>{
            recibeHoraPedido(objHoras.id, objHoras.hora_inicio, objHoras.hora_fin);
        }} disabled >{objHoras.hora_inicio} - {objHoras.hora_fin}</button>)
          })
        }
      </div>
    </>
  );
};

export default CitaCita;

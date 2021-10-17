import { URL_BACKEND } from "../environments/environments";
import axios from 'axios';

const transformaFechaServidor = (fecha)=>{
    let arrayfecha = fecha.split('/');
    return arrayfecha[2]+'-'+arrayfecha[1]+'-'+arrayfecha[0];
  }
  

export const postCita =  async (formulario,fecha,idhora)=>{
        fecha = transformaFechaServidor(fecha);

        let objCita = {
            "idtipodocumento":formulario.cbx_tipo_documento,
            "numerodocumento": formulario.txt_dni,
            "apellidos": formulario.txt_apellidos,
            "nombres": formulario.txt_nombres,
            "email": formulario.txt_email,
            "celular": formulario.txt_celular,
            "idservicio":formulario.cbx_servicio,
            "idhora": idhora,
            "fecha": fecha
        }


        const endpoint = `${URL_BACKEND}/cita`;
    
        const response = await axios.post(
            endpoint,
            JSON.stringify(objCita),
            {
                headers: {
                    'Content-type': 'application/json'
                }
            }
        );

    
        return response.data[0];
    
    }

export const getCita = async ()=>{
    const url =`${URL_BACKEND}/cita`
    const rpta= await axios.get(url);
    return rpta.data;
}

export const getCitapendiente = async ()=>{
    const url = `${URL_BACKEND}/citapendiente`
    const rpta = await axios.get(url);
    return rpta.data;
}
export const getCitasTotales = async ()=>{
    const url = `${URL_BACKEND}/citastotales`
    const rpta = await axios.get(url);
    return rpta.data[0];
}


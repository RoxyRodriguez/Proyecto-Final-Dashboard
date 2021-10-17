import { URL_BACKEND } from "../environments/environments";
import axios from 'axios';

export const getServicioAll = async ()=>{
    const url =`${URL_BACKEND}/servicioAll`
    const rpta= await axios.get(url);
    return rpta.data;
}

export const getServicio = async () => {
	let response = await axios.get(`${URL_BACKEND}/servicio`);
	return response.data;
};

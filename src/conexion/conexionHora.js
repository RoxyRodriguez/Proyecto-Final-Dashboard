import axios from 'axios';
import { URL_BACKEND } from '../environments/environments';

export const getHoras = async () => {
	let response = await axios.get(`${URL_BACKEND}/horario`);
	return response.data;
};
export const getHoraDisponible = async(fecha)=>{
	let response = await axios.get(`${URL_BACKEND}/horariodisponible/${fecha}`); 
	return response.data;
};

import { URL_BACKEND } from "../environments/environments";
import axios from 'axios';

export const getPaciente = async ()=>{
    const url =`${URL_BACKEND}/paciente`
    const rpta= await axios.get(url);
    return rpta.data;
}
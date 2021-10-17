import { URL_BACKEND } from "../environments/environments";
import axios from "axios";

export const getTipoDocumento = async ()=>{
    const url = `${URL_BACKEND}/tipodocumento`;
    const rpta = await axios.get(url);
	return rpta.data;
}
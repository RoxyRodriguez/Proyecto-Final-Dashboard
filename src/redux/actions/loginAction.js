import axios from "axios";
import Swal from "sweetalert2";
import { URL_BACKEND } from "../../environments/environments";
import { SET_SUCCESS_LOGIN } from "../types/types";
import { APP_PASS_KEY } from "../types/types";


export const iniciarSesionAction = (usuario, clave) => {
	return async (dispatch) => {
		let objLogin = {
            "usuario":usuario,
            "clave": clave,
			"appkey": APP_PASS_KEY
        }
		const endpoint = `${URL_BACKEND}/login`;
		const response = await axios.post(
			endpoint,
			JSON.stringify(objLogin),
			{
				headers: {
					'Content-type': 'application/json'
				}
			}
		);


        
		if (response.status === 200) {            
			//console.log(response);
			let { token } = response.data;
			localStorage.setItem('token', token);
			let payload = token.split('.')[1];
			let payloadDecoded = atob(payload);
			let payloadJSON = JSON.parse(payloadDecoded);

			let miautenticado = false;
			if(payloadJSON.result==="ok"){
				miautenticado=true;
			}

			if(payloadJSON.result==="error"){
				Swal.fire({
					icon: "error",
					title: "Error!",
					text: "Usuario y/o Clave incorrecto",
				});
			}
	
			dispatch({
				type: SET_SUCCESS_LOGIN,
				payload: {
					autenticado: miautenticado,
					id_usuario: payloadJSON.id_usuario,
					id_persona: payloadJSON.id_persona,
					usuario: payloadJSON.usuario,
					nombre_completo:payloadJSON.nombres,
					result:payloadJSON.result,					
					token: token
				}
			});
            
		}
        
	};
};


export const iniciarSesionLocalStorage = () => {
	
	return async (dispatch) => {
		let token = localStorage.getItem('token');
		
		
		try {
			if (token) {
				const endpoint = `${URL_BACKEND}/verificacion`;
				const response = await axios.post(endpoint, null, {
					headers: {
						authorization: `Bearer ${token}`
					}
				});
				if (response.data.ok) {
					
					let payload = token.split('.')[1];
					
					let payloadDecoded = atob(payload);
				
					let payloadJSON = JSON.parse(payloadDecoded);
					

					dispatch({
						type: SET_SUCCESS_LOGIN,
						payload: {
							autenticado: true,
							id_usuario: payloadJSON.id_usuario,
							id_persona: payloadJSON.id_persona,
							usuario: payloadJSON.usuario,
							nombre_completo:payloadJSON.nombres,
							result:payloadJSON.result,					
							token: token
						}
					});
				}
			} 
		} catch (error) {
			console.log('errosh');
			localStorage.removeItem('token');			
		}
	};
};
import {
	SET_SUCCESS_LOGIN
} from '../types/types';

const initialState = {
	autenticado: false,
	token: null,
	id_usuario: null,
	id_persona: null,
    usuario: null,
    nombre_completo:null,
    result:null
};

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SUCCESS_LOGIN:
			return {
				...state,
				...action.payload
			};

		default:
			return state;
	}
};

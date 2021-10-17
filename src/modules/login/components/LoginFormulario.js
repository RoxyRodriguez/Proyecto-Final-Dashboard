import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { iniciarSesionAction } from "../../../redux/actions/loginAction";

export const LoginFormulario = (props) => {
  
  const dispatch = useDispatch();
  const { autenticado } = useSelector((state) => state.login);
  

  if (autenticado) {
		props.component.history.push('/dashboard');
	}

  const [formulario, setFormulario] = useState({
		txt_usuario: '',
		txt_clave: ''
	});

  const handleChange = (e) => {
		setFormulario({
			...formulario,
			[e.target.name]: e.target.value
		});
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(iniciarSesionAction(formulario.txt_usuario, formulario.txt_clave));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="auth-form login-form">
        <div className="email mb-3">
          <label className="sr-only" for="txt_usuario"> Correo </label>
          <input id="txt_usuario" name="txt_usuario" type="email"  className="form-control signin-email" placeholder="Ingrese su Correo"  required="required" onChange={handleChange} value={formulario.txt_usuario} />
        </div>
        <div className="password mb-3">
          <label className="sr-only" for="txt_clave"> Contraseña </label>
          <input id="txt_clave" name="txt_clave" type="password" className="form-control signin-password" placeholder="Contraseña"  required="required" onChange={handleChange} value={formulario.txt_clave} />
          <div className="extra mt-3 row justify-content-between">
            <div className="col-6">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="cbx_recordar" name="cbx_recordar" />
                <label className="form-check-label" for="cbx_recordar">Recordar</label>
              </div>
            </div>
            <div className="col-6">
              <div className="forgot-password text-end">
                <a href="#">Olvidaste tu Contraseña?</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button  type="submit" className="btn btn-primary w-100 theme-btn mx-auto" >
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

import React from "react";
import LoginFooter from "./components/LoginFooter";
import { LoginFormulario } from "./components/LoginFormulario";
import LoginIcon from "./components/LoginIcon";

const LoginRouter = (props) => {
  return (
    <>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-12 col-lg-12  text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <LoginIcon />
              <h2 className="auth-heading text-center mb-5">Iniciar Sesión</h2>
              <div className="auth-form-container text-start">
                <LoginFormulario component={props} />
              </div>
            </div>
            <LoginFooter />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRouter;

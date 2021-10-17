import React from "react";
import RecuperarForm from "./components/RecuperarForm";

const RecuperarRouter = () => {
  return (
    <>
      <div class="row g-0 app-auth-wrapper">
        <div class="col-12 col-md-12 col-lg-12 auth-main-col text-center p-5">
          <div class="d-flex flex-column align-content-end">
            <div class="app-auth-body mx-auto">
              <div class="app-auth-branding mb-4">
                <a class="app-logo" href="index.html">
                  <img class="logo-icon me-2" src="/images/favicon.png"  alt="logo"/>
                </a>
              </div>
              <h2 class="auth-heading text-center mb-4">Recuperar Contraseña</h2>
              <div class="auth-intro mb-4 text-center">
                Ingresa tu Correo electrónico y nosotros te enviaremos un enlace a tu Correo, dónde
                podrás facilmente crear una nueva contraseña.               
              </div>

              <div class="auth-form-container text-left">
               <RecuperarForm />

                <div class="auth-option text-center pt-5">
                  <a class="app-link" href="login.html"> Iniciar Sesión </a>
                  {/* <span class="px-2">|</span>
                  <a class="#" href="login.html">   Sign up  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default RecuperarRouter;

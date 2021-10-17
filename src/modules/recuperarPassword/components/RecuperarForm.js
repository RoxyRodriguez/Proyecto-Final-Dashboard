import React from 'react'

const RecuperarForm = () => {
    return (
        <>
          <form class="auth-form resetpass-form">
                  <div class="email mb-3">
                    <label class="sr-only" for="reg-email">
                     Tu Correo
                    </label>
                    <input id="reg-email" name="reg-email" type="email" class="form-control login-email" placeholder="Your Email" required="required"  />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-block theme-btn mx-auto">Recuperar Contraseña </button>
                  </div>
                </form>   
        </>
    )
}

export default RecuperarForm

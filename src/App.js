import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import DashboardDpiRouter from './modules/dashboard/DashboardDpiRouter'
import CitasRouter from "./modules/citas/CitasRouter";
import PacientesRouter from "./modules/pacientes/PacientesRouter";
import ServiciosRouter from "./modules/servicios/ServiciosRouter";
import CitasNuevo from "./modules/citas/CitasNuevo";
import LoginRouter from "./modules/login/LoginRouter";
import RecuperarRouter from "./modules/recuperarPassword/RecuperarRouter";
import PrivateRoute from "./PrivateRoute";
import { iniciarSesionLocalStorage } from "./redux/actions/loginAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  dispatch(iniciarSesionLocalStorage());
  return (
    <>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard" component={DashboardDpiRouter} />
          <Route path="/cita" component={CitasRouter} />     
          <Route path="/nuevaCita" component={CitasNuevo} />     
          <Route path="/pacientes" component={PacientesRouter} />  
          <Route path="/servicios" component={ServiciosRouter} /> 
          <Route path="/login" component={LoginRouter} /> 
          <Route path="/recuperarPass" component={RecuperarRouter} />

          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    </>
  );
};

export default App;

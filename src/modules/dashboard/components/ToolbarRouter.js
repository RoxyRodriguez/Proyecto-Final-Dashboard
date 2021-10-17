import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCog } from "@fortawesome/free-solid-svg-icons";

const ToolbarRouter = () => {
  const {nombre_completo}=useSelector((state)=>state.login)
  return (
    <>
      <div className="app-header-inner">
        <div className="container-fluid py-2">
          <div className="app-header-content">
            <div className="row justify-content-between align-items-center">
              <div className="col-auto">
                <a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" href="#" >
                <FontAwesomeIcon icon={faBars} size="lg" />
                </a>
              </div>
              <div className="search-mobile-trigger d-sm-none col">
                <i className="search-mobile-trigger-icon fas fa-search"></i>
              </div>
              <div className="app-utilities col-auto">                
                <img className="img-user" src="images/doctor.png" alt="user profile" />
                <span className="name-user">Bienvenid@: {nombre_completo} </span>
              </div>
              <div className="app-utilities col-auto">
                <div className="app-utility-item">
                  <a href="settings.html" title="Settings"><FontAwesomeIcon icon={faCog} size="lg" /></a>
                </div>
                <div className="app-utility-item app-user-dropdown dropdown">
                  <a className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
                    <img src="images/user.jpg" alt="user profile" />
                  </a>
                  <ul className="dropdown-menu"aria-labelledby="user-dropdown-toggle">
                    <li> <a className="dropdown-item" href="#">Cuenta </a></li>
                    <li> <a className="dropdown-item" href="#"> Configuración </a></li>
                    <li> <a className="dropdown-item"  href="/login"> Salir </a></li>                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolbarRouter;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faChartBar, faChevronDown, faCog, faHome, faHospital } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";


const SidebarRouter = () => {
  return (
    <>
      <div id="app-sidepanel" className="app-sidepanel">
        <div id="sidepanel-drop" className="sidepanel-drop"></div>
        <div className="sidepanel-inner d-flex flex-column">
          <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">
            &times;
          </a>
          <div className="app-branding">
            <a className="app-logo" href="index.html">
              <img className="logo-icon me-2" src="images/favicon.png" alt="logo"/>
              <span className="logo-text">DPI PAZ</span>
            </a>
          </div>
          <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
            <ul className="app-menu list-unstyled accordion"id="menu-accordion">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">
                  <span className="nav-icon"><FontAwesomeIcon icon={faHome} size="lg" /></span>
                  <span className="nav-link-text">Dashboard</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/cita">
                  <span className="nav-icon"><FontAwesomeIcon icon={faCalendarAlt} size="lg" /></span>
                  <span className="nav-link-text">Citas</span>
                </NavLink>
              </li>
              <li className="nav-item">               
                <NavLink className="nav-link" to="/pacientes">
                  <span className="nav-icon"> <FontAwesomeIcon icon={faHospital} size="lg" /></span>                   
                  <span className="nav-link-text">Pacientes</span>
                </NavLink>
              </li>
              <li className="nav-item has-submenu">
                <a className="nav-link submenu-toggle" href="#"data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                  <span className="nav-icon"> <FontAwesomeIcon icon={faCog} size="lg" /></span>
                  <span className="nav-link-text">Configuración</span>
                  <span className="submenu-arrow"><FontAwesomeIcon icon={faChevronDown} size="lg" /></span>
                </a>
                <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                  <ul className="submenu-list list-unstyled">
                    <li className="submenu-item"><a className="submenu-link" href="#"> Horarios </a></li>
                    <li className="submenu-item">
                      <NavLink className="submenu-link" to="/servicios"> 
                        Servicios
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="charts.html">
                  <span className="nav-icon">
                      <FontAwesomeIcon icon={faChartBar} size="lg" /></span>
                  <span className="nav-link-text">Reportes</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarRouter;

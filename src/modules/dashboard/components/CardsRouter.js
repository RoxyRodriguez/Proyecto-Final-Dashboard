import React, {useEffect, useState} from "react";
import { getCitasTotales } from "../../../conexion/conexionCita";

const CardsRouter = () => {

  const [dataCitaTotal, setDataCitaTotal] = useState([]);
  useEffect(() => {
    getCitasTotales().then((objCita)=>{
      setDataCitaTotal(objCita)
    });

  }, [])


  return (
    <>
      <div className="col-6 col-lg-3">
        <div className="app-card app-card-stat shadow-sm h-100">
          <div className="app-card-body p-3 p-lg-4">
            <h4 className="stats-type mb-1">Total de Citas</h4>
            <div className="stats-figure">{dataCitaTotal.totalcitas}</div>
          </div>
          <a className="app-card-link-mask" href="#"></a>
        </div>
      </div>

      <div className="col-6 col-lg-3">
        <div className="app-card app-card-stat shadow-sm h-100">
          <div className="app-card-body p-3 p-lg-4">
            <h4 className="stats-type mb-1">Citas por Atender</h4>
            <div className="stats-figure"  style={{ color: " #f37317 " }}>{dataCitaTotal.totalpendientes}</div>
          </div>
          <a className="app-card-link-mask" href="#"></a>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="app-card app-card-stat shadow-sm h-100">
          <div className="app-card-body p-3 p-lg-4">
            <h4 className="stats-type mb-1">Citas Canceladas</h4>
            <div className="stats-figure" style={{ color: "#CB0B20" }}>{dataCitaTotal.totalrechazadas}</div>
          </div>
          <a className="app-card-link-mask" href="#"></a>
        </div>
      </div>
      <div className="col-6 col-lg-3">
        <div className="app-card app-card-stat shadow-sm h-100">
          <div className="app-card-body p-3 p-lg-4">
            <h4 className="stats-type mb-1">Pacientes Atendidos</h4>
            <div className="stats-figure" style={{ color: "#141787" }} >{dataCitaTotal.totalatendidas}</div>
          </div>
          <a className="app-card-link-mask" href="#"></a>
        </div>
      </div>
    </>
  );
};

export default CardsRouter;

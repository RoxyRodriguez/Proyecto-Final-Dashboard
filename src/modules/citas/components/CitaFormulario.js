import React,{useEffect, useState} from "react";
import { getTipoDocumento } from "../../../conexion/conexionTipoDocumento";
import { getServicio } from "../../../conexion/conexionServicio";

const CitaFormulario = ({ formulario, handleChange }) => {

  const [dataTipoDocumento, setDataTipoDocumento] = useState([]);
  const [dataSerivicio, setDataServicio] = useState([]);

  useEffect(() => {
    getTipoDocumento().then((tipodocumento) => {
      setDataTipoDocumento(tipodocumento);
    });

    getServicio().then((servicio) => {
      setDataServicio(servicio);
    });
  }, []);

  return (
    <>
      <div className="col-md-4 form-color">       
        <div className="row gx-4 gy-3">
          <div className="col-sm-12">
            <label className="form-label" for="cbx_tipo_documento">
              Tipo de Documento
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="cbx_tipo_documento"
              id="cbx_tipo_documento"
              onChange={handleChange}
              value={formulario.cbx_tipo_documento}
              required
            >
              <option selected>Seleccionar</option>
              {dataTipoDocumento.map((objTipo) => {
                return (
                  <option value={objTipo.id} key={objTipo.id}>
                    {objTipo.tipodocumento}
                  </option>
                );
              })}
            </select>
            <div className="invalid-feedback">Por Favor Escoja una Opción</div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="txt_dni">
              Número
            </label>
            <input
              className="form-control"
              type="text"
              maxlength="8"
              required
              name="txt_dni"
              id="txt_dni"
              value={formulario.txt_dni}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Por Favor Ingrese su Nro de Documento
            </div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="txt_nombres">
              Nombre
            </label>
            <input
              className="form-control"
              type="text"
              required
              name="txt_nombres"
              id="txt_nombres"
              value={formulario.txt_nombres}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Por Favor Ingrese su Nombre</div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="txt_apellidos">
              Apellidos
            </label>
            <input
              className="form-control"
              type="text"
              required
              name="txt_apellidos"
              id="txt_apellidos"
              value={formulario.txt_apellidos}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Por Favor Ingrese su Apellido
            </div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="cbx_servicio">
              Servicio
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              name="cbx_servicio"
              id="cbx_servicio"
              onChange={handleChange}
              value={formulario.cbx_servicio}
            >
              <option selected>Seleccionar</option>
              {dataSerivicio.map((objServicio) => {
                return (
                  <option value={objServicio.id} key={objServicio.id}>
                    {objServicio.servicio}
                  </option>
                );
              })}
            </select>
            <div className="invalid-feedback">Por Favor Escoja una Opción</div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="txt_celular">
              Celular
            </label>
            <input
              className="form-control"
              type="text"
              required
              name="txt_celular"
              id="txt_celular"
              value={formulario.txt_celular}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Por favor Ingresa tu Número de Celular
            </div>
          </div>
          <div className="col-sm-12">
            <label className="form-label" for="txt_email">
              E-mail{" "}
            </label>
            <input
              className="form-control"
              type="email"
              required
              name="txt_email"
              id="txt_email"
              value={formulario.txt_email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">
              Por favor Ingresa un Email Válido
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CitaFormulario;

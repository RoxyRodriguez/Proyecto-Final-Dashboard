import React,{useState} from "react";
import FooterRouter from "../dashboard/components/FooterRouter";
import SidebarRouter from "../dashboard/components/SidebarRouter";
import ToolbarRouter from "../dashboard/components/ToolbarRouter";
import CitaBotones from "./components/CitaBotones";
import CitaCita from "./components/CitaCita";
import CitaFormulario from "./components/CitaFormulario";
import Swal from "sweetalert2"
import { postCita } from "../../conexion/conexionCita";


const CitasNuevo = () => {
  let fechaactual = new Date();
  const [fecha, setFecha] = useState(fechaactual.toLocaleDateString());
  const [idHora, setIdHora] = useState("");
  const [nombreHorario, setNombreHorario] = useState("");

  const [formulario, setFormulario] = useState({
    cbx_tipo_documento:"",
    txt_dni: "",
    txt_nombres: "",
    txt_apellidos:"",
    cbx_servicio: "",
    txt_celular: "",
    txt_email: "",
  });

  const recibeFechaPedido = (fecha) => setFecha(fecha);

  const recibeHoraPedido = (idHora, horaInicio, HoraFin) => {
    let nombreHora = horaInicio + " - " + HoraFin;
    setIdHora(idHora);
    setNombreHorario(nombreHora);
  };

  const handleChange = (e) => {
    let objTemporal = {
      ...formulario,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    };
    setFormulario(objTemporal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
    
    if(idHora===''){
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Debe seleccionar una hora",
      });
      return false;
    }
    
    
    postCita(formulario, fecha, idHora).then((data) => {
      if (data.result === 1) {
        //limpiar el formulario
        let objTemporal = {
          cbx_tipo_documento:"",
          txt_dni: "",
          txt_nombres: "",
          txt_apellidos:"",
          cbx_servicio: "",
          txt_celular: "",
          txt_email: ""
        };
        setFormulario(objTemporal);
        setIdHora("");
        setNombreHorario("");
        setFecha("");

        //lanzar notificacion
        Swal.fire({
          icon: "success",
          title: "Éxito!",
          text: "La cita fue recervada con éxito",
        });
      }
    });

  };
  return (
    <>
      <header className="app-header fixed-top">
        <ToolbarRouter />
        <SidebarRouter />
      </header>
      <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
          <div className="container-xl mt-5">
            <div className="row g-3 mb-4 align-items-center justify-content-between">
              <div className="col-auto">
                <h1 className="app-page-title mb-0">Nueva Cita</h1>
              </div>
            </div>

            <div className="tab-content" id="orders-table-tab-content">
                <section id="cita" class="cita ">
                    <div class="container" data-aos="fade-up">
                        <form onSubmit={handleSubmit}>
                            <div class="row">
                                <CitaFormulario formulario={formulario} handleChange={handleChange} />
                                <div class="col-md-8">
                                    <CitaCita recibeFechaPedido={recibeFechaPedido} recibeHoraPedido={recibeHoraPedido} fecha={fecha} />
                                    <CitaBotones />
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
             
            </div>
          </div>
        </div>

        <footer className="app-footer">
          <FooterRouter />
        </footer>
      </div>
    </>
  );
};

export default CitasNuevo;

import React, {useState,useEffect} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from '@fullcalendar/core/locales/es';
import { getCita } from "../../../conexion/conexionCita";

const CalendarRouter = () => {
  const [dataCita, setDataCita] = useState([]);
  useEffect(() => {
    getCita().then((objCita)=>{
      setDataCita(objCita)
    });

  }, [])
  
  // let miarray=[];

  console.log(dataCita);
  

  return (
    <>
      <div className="col-12 col-lg-12">
        <FullCalendar
          locale={esLocale}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          headerToolbar={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          dateClick={(e) => console.log(e.dateStr)}
          events={dataCita }
        />
      </div>
    </>
  );
};

export default CalendarRouter;

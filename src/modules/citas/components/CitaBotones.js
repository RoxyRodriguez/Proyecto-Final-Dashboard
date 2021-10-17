import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CitaBotones = () => {
  return (
    <>
      <div className='buttons-actions'>
        <div class="col-6 text-end d-inline">
          <button class="btn btn-cancelar" type="submit">
            <i class="ci-user me-2 ms-n1"></i> <FontAwesomeIcon icon={faTrashAlt} className="me-2"/>Cancelar
          </button>
        </div>
        <div class="col-6 text-end d-inline">
          <button class="btn btn-reservar" type="submit">
            <i class="ci-user me-2 ms-n1"></i><FontAwesomeIcon icon={faCheckSquare} className="me-2"/>Reservar
          </button>
        </div>
      </div>
    </>
  );
};

export default CitaBotones;

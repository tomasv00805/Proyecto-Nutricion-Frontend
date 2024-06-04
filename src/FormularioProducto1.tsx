
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { MDBRange } from "mdb-react-ui-kit";
import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState, ChangeEvent } from 'react';

function CheckExample() {
  const [selectedOption, setSelectedOption] = useState("");

  // Función para manejar el cambio de la opción seleccionada
  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.id);
  };
  return (
    <div className="container-form">
      <Form>
        <div className="Titulo-Formulario">
          <h1>FORMULARIO GALLETA 1</h1>
        </div>
        <br />

  <div className ="container-name">
        <div>
          <Form.Label className="Label-Formulario" htmlFor="inputNombreApellido">Nombre y Apellido</Form.Label>
          <FontAwesomeIcon icon={faUser} size="lg" className="Icono-Usuario"/>
          <Form.Control 
            type="text"
            id="inputNombreApellido"
          />
        </div>
        </div>
        <br />
        <div className = "container-sexo">
        <div className="Titulo-Sexo">
          <p>Sexo</p>
        </div>
        <div className="Check-H-M">
          <Form.Check
            type="radio"
            label="Hombre"
            name="gender"
            id="radioHombre"
          />
          <Form.Check
            type="radio"
            label="Mujer"
            name="gender"
            id="radioMujer"
           
          />
        </div>
        </div>
        <br />

        <div className = "container-barra">
        <MDBContainer style={{ maxWidth: "800px" }}>
      <div className="mx-0 mx-sm-auto">
        <p className="fw-bold text-center">
         Puntuacion del producto
        </p>

        <label htmlFor="customRange3" className="form-label">
          1
        </label>
        <label htmlFor="customRange3" className="form-label float-end">
          10
        </label>

        <MDBRange min="0" max="10" defaultValue="5" step="1" id="customRange5" />
  
      </div>
    </MDBContainer>
    </div>
    <div className = "container-sabor">
    <div className="Titulo-Sabor">
          <p>Sabor</p>
        </div>
        <div className="Sabor-check">
          <Form.Check
            type="radio"
            label="Delicioso"
            name="sabor"
            id="radiodelicioso"
            checked={selectedOption === "radiodelicioso"}
            onChange={handleOptionChange}
            className={selectedOption === "radiodelicioso" ? "delicioso-selected" : ""}
          />
          <Form.Check
            type="radio"
            label="Muy bueno"
            name="sabor"
            id="radiomuybueno"
            checked={selectedOption === "radiomuybueno"}
            onChange={handleOptionChange}
            className={selectedOption === "radiomuybueno" ? "muybueno-selected" : ""}
          />
          <Form.Check
            type="radio"
            label="Bueno"
            name="sabor"
            id="radiobueno"
            checked={selectedOption === "radiobueno"}
            onChange={handleOptionChange}
            className={selectedOption === "radiobueno" ? "bueno-selected" : ""}
          />
          <Form.Check
            type="radio"
            label="Regular"
            name="sabor"
            id="radioregular"
            checked={selectedOption === "radioregular"}
            onChange={handleOptionChange}
            className={selectedOption === "radioregular" ? "regular-selected" : ""}
          />
          <Form.Check
            type="radio"
            label="Malo"
            name="sabor"
            id="radiomalo"
            checked={selectedOption === "radiomalo"}
            onChange={handleOptionChange}
            className={selectedOption === "radiomalo" ? "malo-selected" : ""}
          />
          <Form.Check
            type="radio"
            label="Muy malo"
            name="sabor"
            id="radiomuymalo"
            checked={selectedOption === "radiomuymalo"}
            onChange={handleOptionChange}
            className={selectedOption === "radiomuymalo" ? "muymalo-selected" : ""}
          />
        </div>
        </div>
    </Form>
    </div>
  );

}
export default CheckExample;


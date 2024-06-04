import Form from "react-bootstrap/Form";
import "../Styles/App.css";
import { ChangeEvent } from "react";
import fondo1 from "/Img/Black and White Monthly News Email Header.png";
import RadioPregunta from "./RadioPregunta";

function Formulario() {

  const handleOptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
}; 

  return (
    <div className="container-form">
      <Form>
        <div
          className="contenedor-titulo"
          style={{ backgroundImage: `url(${fondo1})` }}
        >
          <div className="Titulo-Formulario">
            <h1>FORMULARIO GALLETA 1</h1>
          </div>
        </div>

        <RadioPregunta />

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Sabor</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range onChange={handleOptionChange}/>
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Aroma</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Textura</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Crocante</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Forma</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Color</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Tamaño</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range />
            <span>Me agrada</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default Formulario;

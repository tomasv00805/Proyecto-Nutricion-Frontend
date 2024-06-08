import Form from "react-bootstrap/Form";
import "../Styles/App.css";
import { ChangeEvent } from "react";
import fondo1 from "/Img/Black and White Monthly News Email Header.png";
import RadioPregunta from "./RadioPregunta";
import Button from 'react-bootstrap/Button';
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import ModalCharging from "./ModalCharging";
import ModalThanks from "./ModalThankyou";

function Formulario() {
  const { register, handleSubmit, setValue } = useForm();

  const [isRespondido, setIsRespondido] = useState(0);

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    setIsRespondido(1);
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        if (value <= 100) {
          data[key] = Math.round(value / 10);
        } else if (value <= 0) {
          data[key] = 0;
        }
      }
    }
    
    try {
      const response = await fetch('https://backtryv5.onrender.com/api/responses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Server response:', result);
      setIsRespondido(2);

    } catch (error) {
      console.error('Error sending data:', error);
      alert('Hubo un error al procesar tu solicitud. Recargá la página y probá de nuevo.');
    }
  };

  type FormValues = {
    gusto_general: string; // Ensure this matches your usage in the form
    sabor: number;
    aroma: number;
    textura: number;
    crocante: number;
    forma: number;
    color: number;
    tamaño: number;
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setValue("gusto_general", id, e.target.value as any);
  };

  return (
    <div className="container-form container-fluid">
      {isRespondido == 1 ? <ModalCharging /> : isRespondido == 2 ? <ModalThanks /> : ""}
      
      <Form onSubmit={handleSubmit(onSubmit as any)}>
        <div
          className="contenedor-titulo"
          style={{ backgroundImage: `url(${fondo1})` }}
        >
          <div className="Titulo-Formulario">
            <h1>FORMULARIO GALLETA 1</h1>
          </div>
        </div>

        <RadioPregunta onRadioChange={handleRadioChange} />

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Sabor</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("sabor")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra ">
          <Form.Label className="Titulo-descripcion">Aroma</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("aroma")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Textura</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("textura")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Crocante</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("crocante")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Forma</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("forma")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Color</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("color")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="container-barra">
          <Form.Label className="Titulo-descripcion">Tamaño</Form.Label>
          <div className="range-labels">
            <span>Me desagrada</span>
            <Form.Range {...register("tamaño")} />
            <span>Me agrada</span>
          </div>
        </div>

        <div className="boton">
          <Button variant="outline-success" type="submit">Enviar</Button>{' '}
        </div>
      </Form>
    </div>
  );
}

export default Formulario;

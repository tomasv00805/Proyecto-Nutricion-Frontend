import Form from "react-bootstrap/Form";
import "../Styles/App.css";
import { ChangeEvent } from "react";
import fondo1 from "/Img/Black and White Monthly News Email Header.png";
import RadioPregunta from "./RadioPregunta";
import Button from 'react-bootstrap/Button';
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

function Formulario() {
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        console.log(value)
        if (value <= 100) {
          data[key] = Math.round(value / 10)
        } else if (value <= 0) {
          data[key] = 0;
        }
      }
    }console.log(data);
    
        try {
            const response = await fetch('https://447a-2800-2148-2400-3f6-3de5-5508-e329-5ecf.ngrok-free.app/api/responses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Server response:', result);
            window.location.href = '/form/enviado';
        } catch (error) {
            console.error('Error sending data:', error);
        }
  };
  type FormValues = {
    gusto_general: string;
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
    setValue("gusto_general", id, e.target.value);
  };

  return (
    <div className="container-form container">
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <div className="container-barra mb-3">
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

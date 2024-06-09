import '../Styles/App.css';
import Form from 'react-bootstrap/Form';
import { ChangeEvent } from 'react';


function RadioPregunta({ onRadioChange }: { onRadioChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
 ;
  return (
    <>
    <div className = "container-gusto mb-3">
      <div className="Titulo-Sabor">
            <p>¿Te gusto la galletita?</p>
      </div>

        <div className="gusto-check d-flex flex-column flex-md-row justify-content-between">
          
          <Form.Check
            inline
            type="radio"
            label="No me gusta nada"
            name="sabor"
            id="No me gusta nada"
            onChange={onRadioChange}
         
            
          />
          <Form.Check
            inline
            type="radio"
            label="No me gusta"
            name="sabor"
            id="No me gusta"
            onChange={onRadioChange}
         
          />
          <Form.Check
            inline
            type="radio"
            label="Me es indiferente"
            name="sabor"
            id="Me es indiferente"
            onChange={onRadioChange}
           
          
          />
          <Form.Check
            inline
            type="radio"
            label="Me gusta"
            name="sabor"
            id="Me gusta"
            onChange={onRadioChange}
            
           
          />
          <Form.Check
            inline
            type="radio"
            label="Me gusta mucho"
            name="sabor"
            id="Me gusta mucho"
            onChange={onRadioChange}
            
          />
        </div>
        </div>
    </>
    
  );
}

export default RadioPregunta; 



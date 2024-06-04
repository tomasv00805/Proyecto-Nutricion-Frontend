import '../Styles/App.css';
import Form from 'react-bootstrap/Form';

function RadioPregunta() {
  return (
    <>
    <div className = "container-gusto">
      <div className="Titulo-Sabor">
            <p>¿Te gusto la galletita?</p>
      </div>
        <div className="gusto-check">
          <Form.Check
            inline
            type="radio"
            label="No me gusta nada"
            name="sabor"
            id="radionomegustanada"
          />
          <Form.Check
            inline
            type="radio"
            label="No me gusta"
            name="sabor"
            id="radionomegusta"
          />
          <Form.Check
            inline
            type="radio"
            label="Me es indiferente"
            name="sabor"
            id="radioindiferente"
          />
          <Form.Check
            inline
            type="radio"
            label="Me gusta"
            name="sabor"
            id="radiomegusta"
          />
          <Form.Check
            inline
            type="radio"
            label="Me gusta mucho"
            name="sabor"
            id="radiomegustamucho"
          />
        </div>
        </div>
    </>
    
  );
}

export default RadioPregunta; 



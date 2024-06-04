
import Card from 'react-bootstrap/Card';
import galleta1 from './assets/Img/galleta1.png';
import Button from 'react-bootstrap/Button'; 
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Productos({Titulo,Receta, to}:{Titulo: string,Receta: string, to: string}) {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="middle" src={galleta1} />
        <Card.Body>
          <Card.Title>{Titulo}</Card.Title>
          <Card.Text>{Receta}</Card.Text>
          <Button className="boton" variant="primary">
            <FontAwesomeIcon icon={faCookieBite} flip="both" style={{color: "#e4b611",}} />
            <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>Ver Formulario</Link>
            </Button>
        </Card.Body>
      </Card>

 
    </div>
  );
}

export default Productos; 
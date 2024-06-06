import data from '../Logic/rptas.json';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import RadarChart from '../Components/RadarChart';

function Home() {

  const respuestas = data.responses;

  return (
      <div className="d-grid gap-2">
        <h1>INFORME DE RESPUESTAS</h1>

        <Card body>
          <h3>Cantidad de Respuestas: {respuestas.length}</h3>
        </Card>

        <Card body className='bpdyyy'>
          <RadarChart />
        </Card>

        <Button className="boton" variant="info" size="lg">
              <Link to="/form" style={{ color: 'inherit', textDecoration: 'none' }}>Crear Respuesta</Link>
        </Button>
      </div>
  );
}

export default Home;
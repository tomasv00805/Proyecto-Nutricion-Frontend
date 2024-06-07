import data from '../Logic/rptas.json';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import RadarChart from '../Components/RadarChart';
import "../Styles/Home.css";

function Home() {

  const respuestas = data.responses;

  

  return (
      <div className=" container-home container-fluic">
        <div className="container-titulo-home"> 
        <h1>INFORME DE RESPUESTAS</h1>
        </div>

        <div className="container-card">
          <div className="container-cant-respuestas">
        <Card body>
          <h3>Cantidad de Respuestas: {respuestas.length}</h3>
        </Card>
        </div>

        <div className="container-radar-chart">
        <Card body className='bpdyyy'>
          <RadarChart />
        </Card>
        </div>
        </div>
        <div className="container-boton">
        <Button className="boton" variant="info" size="lg">
              <Link to="/form" style={{ color: 'inherit', textDecoration: 'none' }}>Crear Respuesta</Link>
        </Button>
        </div>
      </div>
     
  );
}

export default Home;
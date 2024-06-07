import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {RadarChart} from '../Components/Radar';
import "../Styles/Home.css";
import { useEffect, useState } from 'react';
import { fetchResponses } from '../Logic/data';

function Home() {

const [respuestas, setRespuestas] = useState<Response[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchResponses();
      setRespuestas(data);
    };

    fetchData();
  }, []);

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
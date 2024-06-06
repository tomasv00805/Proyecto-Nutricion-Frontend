import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import data from '../Logic/rptas.json';

// Registro de los componentes necesarios de ChartJS
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {

    const respuestas = data.responses;

    const attributes = ['sabor', 'aroma', 'textura', 'crocante', 'forma', 'color', 'tamaño'];
  
    //Sacamos Promedio de todas las respuestas
    const promedio = respuestas.reduce((acc, curr) => {
      const newAcc = { ...acc };
      attributes.forEach(attr => {
        newAcc[attr] += curr[attr];
      });
      return newAcc;
    }, attributes.reduce((acc, curr) => ({ ...acc, [curr]: 0 }), {}));
    //For each atribute in promedio, divide it by respuestas.length
    attributes.forEach(attr => {
      promedio[attr] /= respuestas.length;
    });
  
    const labels = Object.keys(promedio);
    const dataValues = Object.values(promedio);
  
    const newData = {
      labels: labels,
      datasets: [
        {
          label: 'Promedio de Opiniones',
          data: dataValues,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }
      ]
    };

  return <Radar data={newData} />;
}

export default RadarChart;
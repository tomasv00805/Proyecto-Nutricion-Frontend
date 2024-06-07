import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface ResponseData {
    index: number;
    gusto_general: string;
    sabor: number;
    aroma: number;
    textura: number;
    crocante: number;
    forma: number;
    color: number;
    tamaño: number;
}

interface Averages {
    sabor: number;
    aroma: number;
    textura: number;
    crocante: number;
    forma: number;
    color: number;
    tamaño: number;
}


export const RadarChart: React.FC = () => {
    const [data, setData] = useState<Averages | null>(null);

    useEffect(() => {
        console.log('entro al use');
        fetch('https://backtryv5.onrender.com/api/responses/all')
        .then(response => {
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data: ResponseData[]) => {
            const averages = calculateAverages(data);
            console.log('Averages:', averages);
            setData(averages);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Puedes agregar un manejo adicional de errores aquí, como mostrar un mensaje de error al usuario
        });
        }, []);

    const calculateAverages = (responses: ResponseData[]): Averages => {
        const totals = responses.reduce((acc, response) => {
            acc.sabor += response.sabor;
            acc.aroma += response.aroma;
            acc.textura += response.textura;
            acc.crocante += response.crocante;
            acc.forma += response.forma;
            acc.color += response.color;
            acc.tamaño += response.tamaño;
            return acc;
        }, { sabor: 0, aroma: 0, textura: 0, crocante: 0, forma: 0, color: 0, tamaño: 0 });

        const count = responses.length;
        return {
            sabor: totals.sabor / count,
            aroma: totals.aroma / count,
            textura: totals.textura / count,
            crocante: totals.crocante / count,
            forma: totals.forma / count,
            color: totals.color / count,
            tamaño: totals.tamaño / count
        };
    };

    const radarData = {
        labels: ['Sabor', 'Aroma', 'Textura', 'Crocante', 'Forma', 'Color', 'Tamaño'],
        datasets: [
            {
                label: 'Promedio',
                data: data ? [data.sabor, data.aroma, data.textura, data.crocante, data.forma, data.color, data.tamaño] : [],
                backgroundColor: 'rgba(34, 202, 236, 0.2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                borderWidth: 1,
            },
        ],
    };

    const radarOptions = {
        scales: {
            r: {
                beginAtZero: true,
                ticks: {
                    display: false // Ocultar valores numéricos
                },
                pointLabels: {
                    font: {
                        size: 14 // Ajustar el tamaño de la fuente si es necesario
                    }
                }
            }
        }
    };

    return (
        <div>
            <h2>Gráfico de Araña</h2>
            {data ? <Radar data={radarData} options={radarOptions} /> : <p>Cargando datos...</p>}
        </div>
    );
};


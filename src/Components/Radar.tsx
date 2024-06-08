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
import "../Styles/Components/Radar.css"
import { fetchResponses } from '../Logic/data';

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
        fetchResponses()
        .then((data: any) => {
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
                backgroundColor: 'rgba(254, 101, 145, 0.2)',
                borderColor: 'rgba(254, 101, 145, 1)',
                borderWidth: 1,
            },
        ],
    };

    const radarOptions = {
        scales: {
            r: {
                grid: { display: true, color: '#ccc' },
                min: 0,
                max: 10,
                
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                    display: true, // Ocultar valores numéricos.
                    font: { size: 7, family: 'Raleway', style: 'normal', weight: null, color: 'blue' },
                    showLabelBackdrop: false
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
        <div className="info-radar">
            <div className='radar-container'>
                <h4 className='radar-title'>Gráfico de Araña</h4>
                <div className="radar-graphic">
                    {data ? <Radar data={radarData} options={radarOptions as any} /> : <p>Cargando datos...</p>}
                </div>
            </div>
            {data ? 
                <div className="averages-info">
                    <div className="promedios"><h3>Promedios</h3></div>
                    <div className="attribute-info">    
                        <p className="attribute-card">ℹ️ Sabor: <span id='sabor-average'>{data.sabor.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Aroma: <span id='aroma-average'>{data.aroma.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Textura: <span id='textura-average'>{data.textura.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Crocante: <span id='crocante-average'>{data.crocante.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Forma: <span id='forma-average'>{data.forma.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Color: <span id='color-average'>{data.color.toFixed(2)}</span></p>
                        <p className='attribute-card'>ℹ️ Tamaño: <span id='tamano-average'>{data.tamaño.toFixed(2)}</span></p>
                    </div>
                </div>
            : ""}
        </div>
    );
};

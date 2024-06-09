import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    CategoryScale,
    BarElement,
    LinearScale
} from 'chart.js';
import "../Styles/Components/BarChart.css";
import "../Styles/Components/Radar.css";
import { fetchResponses } from '../Logic/data';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, BarElement, LinearScale);

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

interface GustoGeneralCount {
    [key: string]: number;
}

export const BarChart: React.FC = () => {
    const [gustoGeneralCounts, setGustoGeneralCounts] = useState<GustoGeneralCount | null>(null);

    useEffect(() => {
        fetchResponses()
        .then((data: any) => {
            const gustoGeneralCounts = countGustoGeneral(data);
            setGustoGeneralCounts(gustoGeneralCounts);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const countGustoGeneral = (responses: ResponseData[]): GustoGeneralCount => {
        return responses.reduce((acc, response) => {
            acc[response.gusto_general] = (acc[response.gusto_general] || 0) + 1;
            return acc;
        }, {} as GustoGeneralCount);
    };

    const barData = gustoGeneralCounts ? {
        labels: Object.keys(gustoGeneralCounts),
        datasets: [
            {
                label: 'Cantidad de respuestas',
                data: Object.values(gustoGeneralCounts),
                backgroundColor: 'rgba(254, 101, 145, 0.2)',
                borderColor: 'rgba(254, 101, 145, 1)',
                borderWidth: 1,
            },
        ],
    } : {};

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14,
                    },
                    color: '#333',
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                    }
                }
            }
        }
    };

    return (
        <div className="info-bar">
            <div className='bar-container'>
                <h4 className='bar-title'>Distribución de Gusto General</h4>
                <div className="bar-graphic">
                    {gustoGeneralCounts ? <Bar data={barData as any} options={barOptions} /> : <p>Cargando datos...</p>}
                </div>
            </div>
            {gustoGeneralCounts && (
                <div className='averages-info'>
                    <div className="promedios"><h3>Gustos Generales</h3></div>
                    <div className='attribute-info'>
                        {Object.entries(gustoGeneralCounts).map(([key, value]) => (
                            <p className="attribute-card" key={key}>
                                {key}: {value}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

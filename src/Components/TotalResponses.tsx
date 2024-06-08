import { fetchResponses } from '../Logic/data';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Components/TotalResponses.css"

    function TotalResponses() {
        
        const [respuestas, setRespuestas] = useState<Response[]>([]);

        useEffect(() => {
        const fetchData = async () => {
            const data = await fetchResponses();
            setRespuestas(data);
            console.log(data)
        };
    
        fetchData();
        }, []);
    
        return (
            <>
                <div className="card-totalresponses">
                <h3>Respuestas Totales</h3>
                <p className='total-responses'><FontAwesomeIcon icon={faTasks} /> <span id='cant-respuestas'>{respuestas.length === 0 ? "..." : respuestas.length}</span></p>
                </div>
                
            </>
        );
    }
    
    export default TotalResponses;
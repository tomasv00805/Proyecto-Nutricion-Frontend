import "../Styles/Home.css";
import FooterMenu from "../Components/Sections/Footer";
import Header from "../Components/Sections/Header";
import { useState } from 'react';
import TotalResponses from "../Components/TotalResponses";
import {RadarChart} from '../Components/Radar';
import { BarChart } from "../Components/BarChart";

function Home() {
    const [typeGraphic, setThypeGraphic] = useState('radar');
    

    return (
        <>
            <Header isAgent={true} titlePage="ANÁLISIS DE RESPUESTAS"/>
            <div className="body-home">
                <TotalResponses />
                {typeGraphic == 'radar' ? <RadarChart /> : <BarChart />}
            </div>
            <FooterMenu setGraphic={setThypeGraphic} graphic={typeGraphic} />
        </>
    );
}

export default Home;
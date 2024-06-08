import "../../Styles/Components/Header.css";
import React from "react";

interface HeaderProps {
    isAgent: boolean;
    titlePage: string; 
}

const Header: React.FC<HeaderProps> = ({ isAgent, titlePage }) => {
    
    function toCrearRpta(){
        window.location.href = '/form';
    }

    return (
        <>
            <header>
                <div className="logo-pageTitle">
                    <img src="/Img/LOGO_SinFondo.png" alt="Logo" />
                    <div className="text-area">
                        <h1 className="title-page"><b>{titlePage}</b></h1>
                        <h2 className="university-text">Universidad de la Cuenca del Plata</h2>
                    </div>
                </div>
                {isAgent ? 
                <div onClick={toCrearRpta} className="create-response" id="create-response-button"><img src="/Img/icons/plus-solid.svg" alt="Plus" className="plus-icon"/><span className="cr-text">CREAR RESPUESTA</span></div>
                : ""}
            </header>
        </>
    );
}

export default Header;

import "../../Styles/Components/Footer.css";
import React from "react";

// Define a type for the props expected by FooterMenu
interface FooterMenuProps {
    setGraphic: (type: string) => void; // Function that takes a string and returns void
    graphic: string; // String state
}

const FooterMenu: React.FC<FooterMenuProps> = ({ setGraphic, graphic }) => {
    function changeToRadar() {
        setGraphic('radar');
        console.log(graphic);
    }

    function changeToBarras() {
        setGraphic('barra');
        console.log(graphic);
    }

    return (
        <>
            <div className="footer-menu">
                <div
                    id="radar-button"
                    className="footer-button section-radar"
                    onClick={changeToRadar}
                >{graphic === 'radar' ? <img src="/Img/icons/icono-radar-selected.png" alt="Icono radar" className="radar-icon"/> : <img src="/Img/icons/icono-radar.png" alt="Icono radar" className="radar-icon"/>}
                    <span className={graphic === 'radar' ? 'text-menu tm-selected' : "text-menu"}>
                        Gráfico de Araña - Preguntas Descriptivas
                    </span>
                </div>
                <div
                    id="barra-button"
                    className="footer-button section-barras"
                    onClick={changeToBarras}
                >
                    {graphic === 'barra' ? <img src="/Img/icons/icono-barra-selected.png" alt="Icono barra" className="radar-icon"/> : <img src="/Img/icons/icono-barra.png" alt="Icono barra" className="radar-icon"/>}
                    <span className={graphic === 'barra' ? 'text-menu tm-selected' : "text-menu"}>
                        Gráfico de Barras - Preguntas Afectivas
                    </span>
                </div>
            </div>
        </>
    );
}

export default FooterMenu;

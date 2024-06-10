import "../Styles/AboutUs.css"; import Header from "../Components/Sections/Header"; function AboutUs() { return ( <>
    <Header isAgent={true} titlePage="SOBRE NOSOTROS" />
    <div className="body-aboutUs">
        <div className="image-container">
            <h1>El Proyecto</h1> <img src="/Img/galletita.png" alt="Galletita" />
        </div>
        <div className="text-container">
                <p>El objetivo del proyecto es censar las opiniones de degustadores de galletitas con respecto a las galletitas realizadas por los estudiantes de Licenciatura en Nutrición  mediante pruebas afectivas y descriptivas, lo cual permitirá conocer el desempeño y qué aspectos o atributos de las galletitas fueron los más destacados para lograr una correcta toma de decisiones antes de lanzarlo al mercado.</p>
                <h2>Composición Nutricional</h2>
                <p>Creamos una galletita apta para intolerantes a la lactosa y apta para celiacos. Utilizando manteca deslactosada y fécula de maíz. </p>
                <p>Composición Nutricional Aproximada por Porción (4 galletitas):</p>
                <ul>
                    <li>Valor energético: Alrededor de 320-400 kcal por porción de 4 galletitas.</li>
                    <li>Grasas:20-32 gr aproximadamente por porción de 4 galletitas.</li>
                    <li>Grasas saturadas: entre 8-16 gr aproximadamente por porción de 4 galletitas.</li>
                    <li>Grasas trans: La manteca deslactosada en general no las contiene.</li>
                    <li>Carbohidratos: Alrededor de 40-60 gr por porción de 4 galletitas.</li>
                    <li>Azúcares: Estimativamente entre 20-32 gr por porción de 4 galletitas.</li>
                    <li>Fibra dietética: Dependiendo de la presencia de nueces, podría haber alrededor de 4-8 gr de fibra por porción de 4 galletitas.</li>
                    <li>Proteínas: Podría estar entre 4-8 gr por porción de 4 galletitas.</li>
                    <li>Sodio: Alrededor de 80-120 mg por porción de 4 galletitas.</li>
                </ul>
                <h2>Integrantes - Licenciatura en Nutrición</h2>
                <ul>
                    <li>Candela López Lecube</li>
                    <li>Micaela Godoy</li>
                    <li>Karen Goicoechea</li>
                    <li>Dámaris Borda</li>
                    <li>Agustina Fernandez Sisi</li>
                    <li>Luciana Vallejos jara</li>
                    <li>Ramírez Maria de los Milagros</li>
                    <li>Fernández Glenda</li>
                </ul>
                <h2>Desarrolladores</h2>
                <ul>
                    <li>Enzo Canepa - Supervisor</li>
                    <li>Andres Briend - Project Manager</li>
                    <li>Tomas Buontempo - Project Manager</li>
                    <li>Stiven Monsalvo - QA Tester</li>
                    <li>Valentina Salmón - QA Tester</li>
                    <li>Felix Toledo - Front-End Dev</li>
                    <li>Luciano Aquino - Front-End Dev</li>
                    <li>Bruno Pini - Back-End Dev</li>
                </ul>
        </div>
    </div>
</> ); } export default AboutUs;
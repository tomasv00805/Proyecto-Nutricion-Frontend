import { useState } from 'react';
import './App.css';
import Productos from './Productos.tsx';
import CheckExample from './FormularioProducto1.tsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';


function App() {/*
  const [showForm, setShowForm] = useState(false); // Define un estado para controlar si se muestra el formulario o no

  
  // Función para manejar el clic en el botón
  const handleButtonClick = () => {
    setShowForm(true); // Cambia el estado para mostrar el formulario
    {!showForm ? ( // Si showForm es false, renderiza los productos y el botón; de lo contrario, muestra el formulario
        <div className="contenedor">
         <Productos Titulo="Galletita" Receta="Receta 1" Function = {handleButtonClick} /> 
         <Productos Titulo="Galletita" Receta="Receta 1" Function = {handleButtonClick} /> 
        </div>
      ) : (
        <CheckExample /> // Renderiza el componente CheckExample si showForm es true
      )}
  };*/

  return (
    <div className="App">
      <Router>
      <div>   
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<CheckExample />} />
        </Routes>
      </div>
    </Router>
    </div> 
    
  );
}

export default App; 

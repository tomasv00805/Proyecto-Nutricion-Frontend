import './Styles/App.css';
import Formulario from './Components/Formulario.tsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import AboutUs from './Pages/AboutUs.tsx';

function App() {
  return (
    <div className="App">
      <Router>
      <div>   
        <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/responses" element={<Home />} />
        </Routes>
      </div>
    </Router>
    </div> 
  );
}

export default App; 

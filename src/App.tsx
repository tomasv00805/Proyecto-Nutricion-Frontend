import './Styles/App.css';
import Formulario from './Components/Formulario.tsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';

function App() {
  return (
    <div className="App">
      <Router>
      <div>   
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
    </div> 
  );
}

export default App; 

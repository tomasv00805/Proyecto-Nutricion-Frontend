import './Styles/App.css';
import Formulario from './Components/Formulario.tsx'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import MandeForm from './Pages/MandeForm.tsx';


function App() {
  return (
    <div className="App">
      <Router>
      <div>   
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Formulario />} />
        <Route path="/form/enviado" element={<MandeForm />} />
        </Routes>
      </div>
    </Router>
    </div> 
  );
}

export default App; 

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/js/NavBar';
import Home from './Pages/Home';
import Hano from './Pages/Hano';
import Mariet from './Pages/Mariet';
import Yaron from './Pages/Yaron';
import Process from './Pages/Process';

function App() {
  return (
    <div className="App">
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mariet" element={<Mariet />} />
        <Route path="/Hano" element={<Hano />} />
        <Route path="/Yaron" element={<Yaron />} />
        <Route path="/Process" element={<Process />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

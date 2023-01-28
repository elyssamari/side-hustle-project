import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Hano from './Pages/Hano';
import Mariet from './Pages/Mariet';
import Yaron from './Pages/Yaron';
import Process from './Pages/Process';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mariet" element={<Mariet />} />
          <Route path="/Hano" element={<Hano />} />
          <Route path="/Yaron" element={<Yaron />} />
          <Route path="/Process" element={<Process />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

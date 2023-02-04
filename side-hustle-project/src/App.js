import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/js/NavBar';
import Home from './Pages/Home';
import HomeLayout from './Pages/HomeComponents/HomeLayout';
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
        <Route path="/" element={<Home />}>
          <Route path="about" element={<HomeLayout />} /> {/*this is a placeholder*/}
        </Route>
        <Route path="/mariet" element={<Mariet />} />
        <Route path="/hano" element={<Hano />} />
        <Route path="/yaron" element={<Yaron />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

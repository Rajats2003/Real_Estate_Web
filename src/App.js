import './App.css';
import Header from './compenont/Header';
import Howitwork from './compenont/Howitwork';
import About from './compenont/About';
import Agentsir from './compenont/Agentsir';
import Properties from './compenont/Properties';
import Rcontact from './compenont/Rcontact';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
     
        <Header />
        <Howitwork />
        <Agentsir />
        <Properties />
        <Rcontact />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/agentsir" element={<Agentsir />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/rcontact" element={<Rcontact />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;

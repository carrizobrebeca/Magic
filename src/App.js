import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Components/Views/Home";
import Jugadores from "./Components/Views/Jugadores";
import Posiciones from "./Components/Views/Posiciones";
import Ronda from "./Components/Views/Ronda";
import Sorteo from "./Components/Views/Sorteo";
import Loading from "./Components/Pages/Loading";
import FindMatch from "./Components/Views/FindMatch";
import Tabla from "./Components/Views/Tabla";
import CrearJugador from "./Components/Views/CrearJugador";
import NewTable from "./Components/Views/NewTable";
import CardsMatch from "./Components/Pages/CardsMatch";
import Winer from "./Components/Views/Winer";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cargar" element={<CrearJugador />} />
        <Route path="/jugadores" element={<Jugadores />} />
        <Route path="/posiciones" element={<Posiciones />} />
        <Route path="/puntos" element={<Ronda/>} />
        <Route path="/ganador" element={<Winer/>} />
        <Route path="/loading" element={< Loading/>} />
        <Route path="/findMatch" element={< FindMatch/>} />
        <Route path="/tabla" element={< NewTable/>} />
      </Routes>
    </Router>
  );
}

export default App;

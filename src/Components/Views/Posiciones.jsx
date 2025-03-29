import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayers } from "../../store/playerSlice";
import { fetchPoints } from "../../store/pointSlice";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import green from "../../assets/Verde.png";
import red from "../../assets/Red.png";
import blue from "../../assets/Azul.png";
import black from "../../assets/Negro.png";
import yellow from "../../assets/Amarillo.png";
import transparent from "../../assets/Transparent.png";
import no from "../../assets/No.png";
import { useNavigate } from "react-router-dom";

const Posiciones = () => {
    const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.allPlayers);
  const points = useSelector((state) => state.points.allPoints);
  const [tabla, setTabla] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchPlayers());
    dispatch(fetchPoints());
  }, [dispatch]);

  useEffect(() => {
    if (players.length && points.length) {
      const tablaData = players.map((player) => {
        const playerPoints = points.filter((p) => p.id_player === player.id);
        const rondas = Array(10).fill(0);
        let total = 0;
        
        playerPoints.forEach((p) => {
          rondas[p.id_round - 1] = p.points;
          total = p.totalpoints;
        });

        return {
          name: player.name,
          rounds: rondas,
          total,
        };
      });

      setTabla(tablaData);
    }
  }, [players, points]);
  return (
    <>
   <Navbar />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: '50vh',
          height: '100vh',
          margin: "0%",

        }}>

        <div className="flex justify-center pt-10 ">
        <div className="p-4 bg-white  rounded-lg  text-xl bold border border-red-500">
          <h2 className="text-xl font-bold mb-4">Ronda actual {currentRoundId}</h2>
        <h2 className="text-xl font-bold mb-4">Tabla de Posiciones</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Jugador</th>
              {[...Array(10)].map((_, i) => (
                <th key={i} className="border border-gray-500 p-2">R{i + 1}</th>
              ))}
              <th className="border border-gray-500 p-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {tabla.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-500 p-2">{row.name}</td>
                {row.rounds.map((points, i) => (
                  <td key={i} className="border border-gray-500 p-2">{points}</td>
                ))}
                <td className="border border-gray-500 p-2 font-bold">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
<div className="flex justify-center">
   <button className="bg-[#090932] rounded-lg text-red-500 text-xl bold border border-red-500 mt-2 p-4" onClick={() => navigate("/jugadores")}> Nuevo Sorteo</button>
</div>
<div className="flex justify-center">
   <button className="bg-[#090932] rounded-lg text-red-500 text-xl bold border border-red-500 mt-2 p-4" onClick={() => navigate("/ganador")}> Finalizar Juego</button>
</div>
      </div>
    </>
  );
};

export default Posiciones;

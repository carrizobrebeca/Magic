import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayers } from "../../store/playerSlice";
import { fetchPoints } from "../../store/pointSlice";

const NewTable = () => {
    const dispatch = useDispatch();
    const players = useSelector((state) => state.players.allPlayers);
    const points = useSelector((state) => state.points.allPoints);
    const [tabla, setTabla] = useState([]);
  
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
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Tabla de Posiciones</h2>
        <table className="table-auto w-full border-collapse border border-gray-500">
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
    );
  };

export default NewTable;

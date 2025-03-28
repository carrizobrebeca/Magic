import React, { useEffect, useState } from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import green from "../../assets/Verde.png";
import red from "../../assets/Red.png";
import blue from "../../assets/Azul.png";
import black from "../../assets/Negro.png";
import white from "../../assets/Amarillo.png";
import transparent from "../../assets/Transparent.png";
import playerBlack from "../../assets/playerBlack.png";
import playerBlue from "../../assets/playerBlue.png";
import playerGreen from "../../assets/playerGreen.png";
import playerRed from "../../assets/playerRed.png";
import playerTransparent from "../../assets/playerTransparent.png";
import playerWhite from "../../assets/playerYellow.png";
import no from "../../assets/No.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers, updatePlayers } from "../../store/playerSlice";
import { crearPoints, fetchPoints } from "../../store/pointSlice";
import { nextRound } from "../../store/roundSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Ronda = () => {
  const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  const [players, setPlayers] = useState([]);
  const [selectedPoints, setSelectedPoints] = useState({});
  const [puntos, setPuntos] = useState([]);
  const dispatch = useDispatch();
  const { allPlayers, status, error } = useSelector((state) => state.players);

  const navigate = useNavigate();


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPlayers());
    }
    if (status === "succeeded") {
      setPlayers(allPlayers);
    }
  }, [status, allPlayers, dispatch]);

  const fetchPoints = async () => {
    try {
      // setLoading(true);
      // setError(null);
      const response = await axios.get(
        "http://localhost:3001/points"
      );
      const points = response.data;

    
      const puntos = points.filter(
        (point) => point.id_round === currentRoundId
      );

      setPuntos(puntos);
    } catch (err) {
     console.log("Error Puntos");
     
    } 
  };
  useEffect(() => {
    fetchPoints();
  }, [currentRoundId]);


  const playerImages = {
    Black: black,
    White: white,
    Blue: blue,
    Red: red,
    Transparent: transparent,
    Green: green
  };
  const playerProfile = {
    Black: playerBlack,
    White: playerWhite,
    Blue: playerBlue,
    Red: playerRed,
    Transparent: playerTransparent,
    Green: playerGreen
  };

  const uniquePoints = [0, 1, 3];
  const handlePointChange = (playerId, event) => {
    setSelectedPoints((prevPoints) => ({
      ...prevPoints,
      [playerId]: event.target.value, // Se actualiza solo el jugador correspondiente
    }));
  };

  const handleCreatePoint = async (id) => {
    const confirmCreate = window.confirm(
      "ADVERTENCIA: ¿Está seguro que desea cargar puntos?"
    );

    if (confirmCreate) {
      const player = players.find((player) => player.id === id);
      if (!player) {
        alert("Jugador no encontrado");
        return;
      }

      const currentPoints = player.points || 0;
      const newPoint = Number(selectedPoints[id]);

      if (isNaN(newPoint)) {
        alert("Seleccione un valor de puntos válido.");
        return;
      }

      const totalPoints = currentPoints + newPoint;

      try {
        const response = await dispatch(crearPoints({
      id_round: currentRoundId,
      id_player: id,
      points: newPoint,
      totalpoints: totalPoints
    }));  

    if (crearPoints.fulfilled.match(response)) { 
      alert("Puntos cargados con éxito");
      
      // Si `crearPoints` se ejecutó correctamente, entonces actualizamos al jugador
      await dispatch(updatePlayers({
        id: id,
        points: totalPoints
      }));
    }
      } catch (error) {
        console.error("Error al cargar los puntos:", error);
        alert("Error al cargar los puntos");
      }
    }
  };

  const handleFinalizeRound = () => {
    // Verificar si todos los jugadores tienen puntos cargados
    const pointsLoaded = puntos.filter(point => point.id_round === currentRoundId);

    if (pointsLoaded.length < 6) {
      alert("⚠️ Advertencia: Debe cargar los puntos de TODOS los jugadores antes de finalizar la ronda.");
      return;
    }
  
    const confirmFinalize = window.confirm("¿Está seguro de finalizar la ronda?");
    
    if (confirmFinalize) {
      dispatch(nextRound()); // Avanza a la siguiente ronda
      navigate("/sorteo"); 
    }
  };

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

        <div action="" className="flex justify-center pt-10 ">
          <div className="block max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2>Carga de Puntos</h2>
            </div>
            <div className="text-left text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2>{currentRoundId}° Ronda</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={no} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Jugador</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Cargar Puntos</h2>

            </div>

            {players
              .filter((player) => player.id === 1)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}
            {players
              .filter((player) => player.id === 2)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}
       
             {players
              .filter((player) => player.id === 3)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}
       {players
              .filter((player) => player.id === 4)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}
            {players
              .filter((player) => player.id === 5)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}
            {players
              .filter((player) => player.id === 6)
              .map((player) => (
                <form action="" key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <select
                    onChange={(event) => handlePointChange(player.id, event)}
                    value={selectedPoints[player.id] || ""} // Si no hay valor, usa una cadena vacía
                    name="points"
                    id={`points-${player.id}`} // Asegura que cada select tenga un id único
                  >
                    <option value="">Puntos</option>
                    {uniquePoints.map((point) => (
                      <option key={point} value={point}>
                        {point}
                      </option>
                    ))}
                  </select>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <button onClick={() => handleCreatePoint(player.id)} className="...">
                    Cargar Puntos
                  </button>

                </form>
              ))}


            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button onClick={handleFinalizeRound} className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Finalizar Ronda
              </button>
            </div>

          </div>
        </div>


      </div>
    </>
  );
};

export default Ronda;

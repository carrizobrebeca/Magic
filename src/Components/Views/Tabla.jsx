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
import { fetchPlayers } from "../../store/playerSlice";
import { crearPoints, fetchPoints } from "../../store/pointSlice";
import { nextRound } from "../../store/roundSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Tabla = () => {
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

    
      // const puntos = points.filter(
      //   (point) => point.id_round === currentRoundId
      // );

      setPuntos(points);
         // const puntos = points.filter(
      //   (point) => point.id_round === currentRoundId
      // );
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
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R1 </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R2</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R3 </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R4</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R5 </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R6</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R7 </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R8</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R9 </h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">R10</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Total</h2>
            </div>

            {puntos
              .filter((point) => point.id_player === 1)
              .map((point) => (
                <div key={point.id} className="flex justify-around m-4">

                  {/* <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" /> */}
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{point.points}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{point.totalpoints}</h2>
                
                </div>

              ))}
            {players
              .filter((player) => player.id === 2)
              .map((player) => (
                <div key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  

                </div >
              ))}
            {players
              .filter((player) => player.id === 3)
              .map((player) => (
                <div key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  
                </div>
              ))}
            {players
              .filter((player) => player.id === 4)
              .map((player) => (
                <div key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                 
                </div>
              ))}
            {players
              .filter((player) => player.id === 5)
              .map((player) => (
                <div key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                 

                </div>
              ))}
            {players
              .filter((player) => player.id === 6)
              .map((player) => (
                <div key={player.id} className="flex justify-around m-4">
                  <img src={playerProfile[player.color]}
                    alt={player.color} className="rounded-full h-10 w-10" />
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">{player.name}</h2>
                  <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
                  
               
                </div>
              ))}


            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Ir a Buscar Partida
              </button>
            </div>

          </div>
        </div>


      </div>
    </>
  );
};

export default Tabla;

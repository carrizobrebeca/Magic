import React, { useEffect, useState } from "react";
import bg from "../../assets/bg.jpg";

import Navbar from "../Pages/NavBar";
import CardsMatch from "../Pages/CardsMatch";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchTeams } from "../../store/teamSlice";
import { useDispatch, useSelector } from "react-redux";

const FindMatch = () => {
  const navigate = useNavigate();
 
  const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  //esto lo pasa cuando creamos el team desde jugadores ---EVENTUALMENTE
  // const location = useLocation();
  // const { id_round } = location.state || {}; 
  //<h1>Finding match for round {id_round}</h1>

  //por ahora simulamos
  // const id_round = 1;


  const [teams, setTeams] = useState([]);
  const dispatch = useDispatch();
  const { allTeams, status, error } = useSelector((state) => state.teams);

  useEffect(() => {
    // Solo disparar la acción si el estado es idle (sin carga)
    if (status === "idle") {
      dispatch(fetchTeams());
    }
    if (status === "succeeded") {
      setTeams(allTeams); // Asignamos los jugadores cuando la carga es exitosa
    }
  }, [status, allTeams, dispatch]); // Añadir dispatch a las dependencias

  // const filteredTeams = teams.filter((team) => team.id_round === currentRoundId);
  const filteredTeams = Array.isArray(teams) ? teams.filter((team) => team.id_round === currentRoundId) : [];
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: '50vh',
          height: '100vh',
          margin: "0%",

        }}>
       


        <div className="grid grid-row"> 
      
          <button className="bg-[#090932] rounded-lg text-red-500 text-xl border border-red-500 mt-2" onClick={() => navigate("/puntos")}> Ronda {currentRoundId} | Cargar Puntos</button>
          <CardsMatch filteredTeams={filteredTeams} />
        </div>
      </div>
    </>
  );
};

export default FindMatch;

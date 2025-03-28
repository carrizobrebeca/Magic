import React from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import Cards from "../Pages/Cards";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { crearTeams } from "../../store/teamSlice";

const Jugadores = () => {
  const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCreateTeam = async (currentRoundId) => {
    const roundId = Number(currentRoundId);
    try {
      // Ejecutar el dispatch para crear el equipo
      const result = await dispatch(crearTeams({
        id_round: roundId,
      }));

      // Si el dispatch es exitoso, navegar a la página de loading
      if (result) {  // Asegúrate de que el resultado de la acción es válido o exitoso
        navigate("/loading");
      } else {
        // Si el dispatch no devuelve el resultado esperado, puedes manejarlo aquí si es necesario
        console.error("No se pudo crear el equipo correctamente.");
        alert("Error al crear el equipo.");
      }
    } catch (error) {
      console.error("Error al crear el equipo:", error);
      alert("Error al crear el equipo.");
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
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: '50vh',
          height: '100vh',
          margin: "0%",

        }}>


        <div className="grid grid-row">
          <Cards />

          <button className="text-xl bold text-white ]" onClick={() => handleCreateTeam(currentRoundId)}> Find Match</button>
          {/* <button
  className="text-xl font-bold text-white"
  onClick={() => navigate("/loading", { state: { id_round } })}
></button> */}
          {/* Aca teng que crear una partida y enviar el id de la ronda pasarselo a FindMatch ,, alli filtrar equipo por ronda */}
        </div>
      </div>
    </>
  );
};

export default Jugadores;

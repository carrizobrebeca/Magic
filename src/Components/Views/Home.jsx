import React, { useState } from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import { crearRounds, resetRound } from "../../store/roundSlice";
import { useDispatch, useSelector } from "react-redux";
import { crearPlayer } from "../../store/playerSlice";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  const dispatch = useDispatch();

  const navigate = useNavigate();
   const handleFinalizeRound = () => {
        dispatch(resetRound()); 
    };
  const handleCrearRound = async () => {
    try {
      const result = await dispatch(crearRounds());
      
      // Verifica si la respuesta es exitosa
      if (crearRounds.fulfilled.match(result)) {
        alert("Ronda creada con éxito");
        navigate("/cargar");
      } else {
        console.error("Error al crear ronda:", result?.payload?.message || "Sin mensaje de error");
        alert("Error al crear ronda");
      }
    

    } catch (error) {
      console.error("Error al crear ronda:", error);
      alert("Error al crear ronda");
    }
  }
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

        <form className="flex justify-center pt-10 ">
          <div className="block max-w-4xl w-full bg-gradient-to-r from-[#090932] from-20% via-cyan-900 via-50% to-[#090932] to-90% p-6 rounded-lg shadow-lg">
            <div className="text-center text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2 className=" mt-10 mb-10 ">Bienvenidos mis queridos Nerds</h2>

            </div>


            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button onClick={handleCrearRound} type="" className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Iniciar
              </button>
            </div>
            <div className="text-center text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2 className="text-transparent">-</h2>

            </div>
            <div className="text-center text-xl text-red-500 mt-10 mb-10 ">

              <p>Con amor, niñita!</p>
            </div>
            <h2>Para Iniciar una nueva partida desde cero</h2>
            <button onClick={handleFinalizeRound} className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Finalizar Ronda
              </button> 

          </div>
        </form>


      </div>
    </>
  );
};

export default Home;

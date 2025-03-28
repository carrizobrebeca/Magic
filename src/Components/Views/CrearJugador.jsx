import React, { useState } from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { crearPlayer } from "../../store/playerSlice";

const CrearJugador = () => {
  const currentRoundId = useSelector((state) => state.rounds.currentRoundId);
  const dispatch = useDispatch();

  const [playerData, setPlayerData] = useState({
    name: "",
    color: "",
    points: 0
  });
  const uniqueColors = ["Black", "Blue", "Green", "Red", "Transparent", "White"];

  const handleChange = (event) => {

    setPlayerData({ ...playerData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmCreate = window.confirm(
      "ADVERTENCIA: ¿Está seguro que desea Crear este jugador?"
    );

    if (confirmCreate) {


      const points = 0;

      try {
        await dispatch(crearPlayer({
          ...playerData,
          name: playerData.name,
          color: playerData.color,

        }));



      } catch (error) {
        console.error("Error al crear Jugador:", error);
        alert("Error al crear Jugador");
      }
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

        <form onSubmit={handleSubmit} className="flex justify-center pt-10 ">
          <div className="block max-w-4xl w-full bg-gradient-to-r from-[#090932] from-20% via-cyan-900 via-50% to-[#090932] to-90% p-6 rounded-lg shadow-lg">
            <div className="text-center text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2>Datos del Jugador</h2>
            </div>
            <div className="m-4">
              <label className="block text-xl text-red-500 mb-4" htmlFor="">Nombre</label>
              <input type="text"
                name="name"
                placeholder="name"
                value={playerData.name}
                onChange={handleChange} className="text-xl mb-4" />
            </div>
            <div className="m-4">
              <label className="block text-xl text-red-500 mb-4" htmlFor="">Color</label>

              <select
                name="color"
                id="color"
                value={playerData.color}
                onChange={handleChange}
              >
                <option value="">Color</option> {/* Valor vacío por defecto */}
                {uniqueColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
            <div >
            </div>

            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button type="submit" className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Crear jugador
              </button>
            </div>

          </div>
        </form>


      </div>
    </>
  );
};

export default CrearJugador;

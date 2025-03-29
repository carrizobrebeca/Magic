
import React, { useEffect, useState } from 'react';
import playerBlack from "../../assets/playerBlack.png";
import playerBlue from "../../assets/playerBlue.png";
import playerGreen from "../../assets/playerGreen.png";
import playerRed from "../../assets/playerRed.png";
import playerTransparent from "../../assets/playerTransparent.png";
import playerWhite from "../../assets/playerYellow.png";
import black from "../../assets/Negro.png";
import white from "../../assets/Amarillo.png";
import blue from "../../assets/Azul.png";
import red from "../../assets/Red.png";
import transparent from "../../assets/Transparent.png";
import green from "../../assets/Verde.png";
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../../store/playerSlice';
import loading from "../../assets/loading.png"

const WinerContainer = () => {
 const [players, setPlayers] = useState([]);
  const dispatch = useDispatch();
  const { allPlayers, status, error } = useSelector((state) => state.players);

  useEffect(() => {
    // Solo disparar la acción si el estado es idle (sin carga)
    if (status === "idle") {
      dispatch(fetchPlayers());
    }
    if (status === "succeeded") {
      setPlayers(allPlayers); // Asignamos los jugadores cuando la carga es exitosa
    }
  }, [status, allPlayers, dispatch]); // Añadir dispatch a las dependencias


  const maxPoints = Math.max(...players.map(player => player.points));
  const filteredPlayers = players.filter(player => player.points === maxPoints);



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
    <div class="flex w-[650px] h-[650px] justify-center items-center relative">
      <div class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute"></div>
      <div class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute "></div>
      <div class="flex w-[550px] h-[550px] justify-center items-center relative">
        <div class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"></div>
        <div class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
        <div class="flex w-[550px] h-[550px] justify-center items-center relative">
          <div class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"></div>
          <div class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
          {filteredPlayers.map((player) => (
          <div key={player.id} class="flex w-[550px] h-[550px] justify-center items-center relative">
            <img
              img src={playerProfile[player.color]} 
              alt={player.color}
              className="flex w-[500px] h-[500px] rounded-full"
            />
            <p className="absolute text-[48px] text-yellow-900 font-extrabold font-serif"></p>
            <p className="absolute text-[47px] text-white font-extrabold font-serif"></p>    
            
            <p className="absolute text-[47px] text-white font-extrabold font-serif pt-[600px] animated-pulse">{player.name}</p>
          </div>
          )) }
        </div>
        {/* <div class="flex w-[550px] h-[550px] justify-circle items-center relative">
         
         <p className="absolute p-4 text-5xl text-white font-extrabold">8</p>
          

       </div> */}
       
      </div>
    </div>
    //  <div class="flex w-[600px] h-[600px] justify-center items-center relative">
    //  <div class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"></div>
    //  <div class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
    //  <div class="flex w-[550px] h-[5500px] justify-center items-center relative">
    //    <div class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"></div>
    //    <div class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"></div>
    //  </div>
    // </div>
  );
};

export default WinerContainer;

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
import { fetchPlayers } from '../../store/playerSlice'; // Asegúrate de importar la acción correctamente

const CardMatch = ({ playerId, teamId, playerNumber }) => {
 
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

  // Filtramos a los jugadores de color "Black"
  const filteredPlayers = players.filter((player) => player.id === playerId);
  // const filteredTeams = teams.filter((team) => team.id === teamId);
console.log(filteredPlayers);

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
    <div className='bg-black rounded-lg p-4 m-10 w-max-[30%] h-max-[90%]'>
      {filteredPlayers.map((player) => (
        <div key={player.id} className='bg-gradient-to-r from-black from-20% via-cyan-900 via-50% to-black to-90% p-2 rounded-xl'>
          <div className='bg-gradient-to-r from-black from-20% via-cyan-900 via-50% to-black to-90% rounded-full p-2 flex justify-center items-center'>
            <h2 className='text-white text-xl bold'>{player.name}</h2>
          </div>
          <div className='bg-black rounded-full'>
            <img src={playerProfile[player.color]} 
              alt={player.color} className='h-50 rounded-full' />
          </div>

          <div className='flex justify-between bg-gradient-to-r from-black from-20% via-cyan-900 via-50% to-black to-90% rounded-x p-6'>
            <h2 className='text-white'>Points: {player.points}</h2>
            
          </div>
          <div className='bg-gradient-to-r from-black from-30% via-black via-50% to-cyan-900 to-90% rounded-full flex justify-between items-center w-full'>
            <img src={playerImages[player.color]} 
              alt={player.color} 
              className='rounded-full h-10 w-10'  />
            <h2 className='text-white mr-10'>{player.color}</h2>
          </div>
        </div>
      ))}
      <div className='flex justify-between text-xs text-white/50'>
        <p>2025*CUSTOM CARD</p>
        <p>© MTGCARD</p>
      </div>
    </div>
  );
};

export default CardMatch;

import React, { useEffect, useState } from 'react'
import playerRed from "../../assets/playerRed.png";
import red from "../../assets/Red.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../../store/playerSlice';

const CardRed = () => {
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

    const filteredPlayers = players.filter((player) => player.color === "Red");

    return (
        <div className='bg-black/50 rounded-lg p-4 m-10 w-max-[30%] h-max-[90%]'>
             {filteredPlayers.map((player) => (
            <div className='bg-gradient-to-r from-red-900 from-20% via-black via-50% to-red-900 to-90% p-2 rounded-xl'>
                <div className='bg-gradient-to-r from-red-900 from-20% via-black via-50% to-red-900 to-90% p-4 flex justify-left items-cente'>
                    <h2 className='text-white text-xl bold'>{player.name}</h2>
                </div>
                <div className='bg-black rounded-full'>
                    <img src={playerRed} alt="" className='h-50 ' />
                </div>
               
                <div className='bg-gradient-to-r from-red-900 from-20% via-black via-50% to-red-900 to-90% p-6'>
                    <h2 className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni ad totam quam, officiis optio similique quas, laudantium suscipit facere velit explicabo. Labore quod dolorum, aspernatur sequi corrupti nobis ex?</h2>
                </div>
                <div className=' flex justify-between items-center w-full'>
                  
                  <h2 className='text-white mr-10'>{player.color}</h2>  
                  <img src={red} alt="" className='rounded-full h-10 w-10' />
              </div>
            </div>
        ))}
            <div className='flex justify-between text-xs text-red-200'>
                <p>2025*CUSTOM CARD</p>
                <p>© MTGCARD</p>
            </div>
        </div>
    )
}

export default CardRed

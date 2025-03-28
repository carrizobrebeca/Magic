import React, { useEffect, useState } from 'react'
import playerGreen from "../../assets/playerGreen.png";
import green from "../../assets/Verde.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../../store/playerSlice';

const CardGreen = () => {
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

   
    const filteredPlayers = players.filter((player) => player.color === "Green");

    return (
        <div className='bg-[#090932]/50 rounded-lg p-4 m-10 w-max-[30%] h-max-[90%]'>
             {filteredPlayers.map((player) => (
            <div className='bg-gradient-to-r from-[#090932] from-20% via-green-900 via-50% to-[#090932] p-2  to-90% rounded-xl'>
                
            <div className='bg-gradient-to-r from-[#090932] from-30% via-[#090932] via-50% to-green-900 to-90% rounded-full flex justify-between items-center w-full'>
                    <img src={green} alt="" className='rounded-full h-10 w-10' />
                    <h2 className='text-green-100 mr-10'>{player.color}</h2>
                </div>
                <div className='bg-gradient-to-r from-[#090932] from-20% via-green-900 via-50% to-[#090932] to-90% rounded-full flex justify-center items-cente'>
                    <h2 className='text-green-100 text-xl bold'>{player.name}</h2>
                </div>
                <div className='bg-black rounded-full'>
                    <img src={playerGreen} alt="" className='h-50' />
                </div>
             
                <div className='bg-gradient-to-r from-[#090932] from-20% via-green-900 via-50% to-[#090932] to-90% rounded-x border-4 border-transparent p-6'>
                    <h2 className='text-blue-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni ad totam quam, officiis optio similique quas, laudantium suscipit facere velit explicabo. Labore quod dolorum, aspernatur sequi corrupti nobis ex?</h2>
                </div>
            </div>
               ))}
            <div className='flex justify-between text-xs text-green-200'>
                <p>2025*CUSTOM CARD</p>
                <p>© MTGCARD</p>
            </div>
        </div>
    )
}

export default CardGreen

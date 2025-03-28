import React, { useEffect, useState } from 'react'
import playeTransparent from "../../assets/playerTransparent.png";
import transparent from "../../assets/Transparent.png";
import { fetchPlayers } from '../../store/playerSlice';
import { useDispatch, useSelector } from 'react-redux';

const CardTransparent= () => {
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

 
    const filteredPlayers = players.filter((player) => player.color === "Transparent");
    return (
        <div className='bg-[#090932] bg-opacity-50 rounded-lg p-4 m-10 w-max-[30%] h-max-[90%]'>
             {filteredPlayers.map((player) => (
            <div className='bg-[#090932] bg-opacity-10 rounded-xl p-2 '>
            <div className='bg-black rounded-full'>
                    <img src={playeTransparent} alt="" className='h-50 rounded-full' />
                </div>
                <div className='bg-gradient-to-r from-[#090932] from-20% via-cyan-900 via-50% to-[#090932] to-90% rounded-full border-4 border-[#090932] flex justify-center items-cente'>
                    <h2 className='text-white text-xl bold'>{player.name}</h2>
                </div>
                
                
                <div className='bg-[#090932] bg-opacity-5 rounded-x border-4 border-[#090932] p-6'>
                    <h2 className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni ad totam quam, officiis optio similique quas, laudantium suscipit facere velit explicabo. Labore quod dolorum, aspernatur sequi corrupti nobis ex?</h2>
                </div>
                <div className='bg-gradient-to-r from-[#090932] from-30% via-[#090932] via-50% to-transparent to-90% rounded-full flex justify-between items-center border-4 border-[#090932] w-full'>
                    <img src={transparent} alt="" className='rounded-full h-10 w-10' />
                    <h2 className='text-white mr-10'>{player.color}</h2>
                </div>
            </div>
        ))}
            <div className='flex justify-between text-xs text-white/50'>
                <p>2025*CUSTOM CARD</p>
                <p>© MTGCARD</p>
            </div>
        </div>
    )
}

export default CardTransparent

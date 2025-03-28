import React, { useEffect, useState } from 'react'
import playerYellow from "../../assets/playerYellow.png";
import yellow from "../../assets/Amarillo.png";
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../../store/playerSlice';

const CardWhite = () => {
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
    const filteredPlayers = players.filter((player) => player.color === "White");
    return (
        <div className='bg-[#090932] rounded-lg p-4 m-10 w-max-[30%] h-max-[90%]'>
            {filteredPlayers.map((player) => (
                <div className='bg-gradient-to-r from-[#090932] from-20% via-white via-50% to-[#090932] to-90% p-2 '>
                    <div className='bg-gradient-to-r from-[#090932] from-20% via-white via-50% to-[#090932] to-90% border-4 border-transparent flex justify-rigth items-cente'>
                        <h2 className='text-white text-xl bold'>{player.name}</h2>
                    </div>

                    <div className=''>
                        <img src={playerYellow} alt="" className='h-50 border-4 border-transparent' />
                    </div>
                    <div className='flex justify-between items-center w-full '>
                        <h2 className='text-white mr-10 '>{player.color}</h2>
                        <img src={yellow} alt="" className='rounded-full h-10 w-10' />

                    </div>
                    <div className=' p-4 border-4 border-transparent p-6'>
                        <h2 className='text-blue-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia magni ad totam quam, officiis optio similique quas, laudantium suscipit facere velit explicabo. Labore quod dolorum, aspernatur sequi corrupti nobis ex?</h2>
                    </div>

                </div>
            ))
            }
            <div className='flex justify-between text-xs text-white/50'>
                <p>2025*CUSTOM CARD</p>
                <p>© MTGCARD</p>
            </div>
        </div>
    )
}

export default CardWhite

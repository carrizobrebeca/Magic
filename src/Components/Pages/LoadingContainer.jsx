import React, { useEffect, useState } from "react";
import loading from "../../assets/loading.png"
const LoadingContainer = () => {
  const [count, setCount] = useState(10); // Inicializa el contador en 10

  useEffect(() => {
    // Si el contador llega a 0, no hacer nada más
    if (count === 0) return;

    // Establece un temporizador que decrementa el contador cada 1 segundo
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000); // 1000ms = 1 segundo

    // Limpiar el temporizador cuando el componente se desmonte o el contador llegue a 0
    return () => clearInterval(timer);
  }, [count]); // El efecto se ejecuta cada vez que el contador cambia
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
          <div class="flex w-[550px] h-[550px] justify-center items-center relative">
            <img
              src={loading}
              alt=""
              className="flex w-[500px] h-[500px] rounded-full"
            />
            <p className="absolute text-[48px] text-yellow-900 font-extrabold font-serif">MATCH FOUND</p>
            <p className="absolute text-[47px] text-white font-extrabold font-serif">MATCH FOUND</p>    
            
            <p className="absolute text-[47px] text-white font-extrabold font-serif pt-[600px] animated-pulse"> {count}</p>
          </div>
          
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

export default LoadingContainer;

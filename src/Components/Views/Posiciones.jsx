import React from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import green from "../../assets/Verde.png";
import red from "../../assets/Red.png";
import blue from "../../assets/Azul.png";
import black from "../../assets/Negro.png";
import yellow from "../../assets/Amarillo.png";
import transparent from "../../assets/Transparent.png";
import no from "../../assets/No.png";

const Posiciones = () => {
  return (
    <>
   <Navbar />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          minHeight: '50vh',
          height: '100vh',
          margin: "0%",

        }}>

        <form action="" className="flex justify-center pt-10 ">
        <div className="block max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center text-xl text-red-500 mt-10 mb-10 border-b-2 border-red-500">
              <h2>Tabla de posiciones</h2>
            </div>
         
            <div className="flex justify-around m-4">
              <img src={no} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">1R</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">2R</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={green} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={red} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={black} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={blue} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={yellow} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div className="flex justify-around m-4">
              <img src={transparent} alt="" className="rounded-full h-10 w-10" />
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Nombre</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Puntos</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">|</h2>
              <h2 className="text-xl text-red-500 mb-4" htmlFor="">Estado</h2>
            </div>
            <div >
            </div>

            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Cargar Puntos
              </button>
            </div>
          
          </div>
        </form>


      </div>
    </>
  );
};

export default Posiciones;

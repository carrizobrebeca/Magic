import React from "react";
import Navbar from "../Pages/NavBar";
import bg from "../../assets/bg.jpg";
import green from "../../assets/Verde.png";
import red from "../../assets/Red.png";
import blue from "../../assets/Azul.png";
import black from "../../assets/Negro.png";
import yellow from "../../assets/Amarillo.png";
import no from "../../assets/No.png";

const Sorteo = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: '50vh',
          height: '100vh',
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // textAlign: "center",
          // padding: "-10px",
          margin: "0%",

        }}>
        <div className="flex justify-center pt-10 ">
          <div>


            <div className="text-center text-xl text-red-500 mt-10">
              <h2>Sorteo</h2>
            </div>
          </div>
        </div>
        <form action="" className="flex justify-center pt-10 ">
          <div className="block max-w-4xl w-full p-6 rounded-lg shadow-lg">
          
            <div className="text-center text-xl text-red-500 mt-10 mb-10">
            <label className="text-xl text-red-500 mb-4 mr-4" htmlFor="">Ronda</label>
              <select className="text-xl mb-4" name="ronda" id="">
              <option className="text-red-500" value="red">1</option>
              <option className="text-red-500" value="red">2</option>
              <option className="text-red-500" value="red">3</option>
              <option className="text-red-500" value="red">4</option>
              <option className="text-red-500" value="red">5</option>
              <option className="text-red-500" value="red">6</option>
              <option className="text-red-500" value="red">7</option>
              <option className="text-red-500" value="red">8</option>
              <option className="text-red-500" value="red">9</option>
              <option className="text-red-500" value="red">10</option>
              <option className="text-red-500" value="red">11</option>
              <option className="text-red-500" value="red">12</option>
              <option className="text-red-500" value="red">13</option>
              <option className="text-red-500" value="red">14</option>
              <option className="text-red-500" value="red">15</option>
              <option className="text-red-500" value="red">16</option>
              <option className="text-red-500" value="red">17</option>
              <option className="text-red-500" value="red">18</option>
              <option className="text-red-500" value="red">19</option>
              <option className="text-red-500" value="red">20</option>
              </select>
            </div>
            
            <div className="flex justify-around items-center textAlign-center m-4 bg-white rounded-full text-red-500 text-xl p-4 md:text-lg">
              <img src={green} alt="" className="rounded-full h-10 w-10" />
              <input type="text" className="flex justify-center"/>
              <h2 className="" htmlFor="">vs</h2>
              <input type="text"  className="flex justify-center"/>
              <img src={green} alt="" className="rounded-full h-10 w-10" />
            </div>
            <div className="flex justify-around items-center textAlign-center m-4 bg-white rounded-full text-red-500 text-xl p-4 md:text-lg">
              <img src={green} alt="" className="rounded-full h-10 w-10" />
              <input type="text" className="flex justify-center"/>
              <h2 className="" htmlFor="">vs</h2>
              <input type="text"  className="flex justify-center"/>
              <img src={green} alt="" className="rounded-full h-10 w-10" />
            </div>
            <div className="flex justify-around items-center textAlign-center m-4 bg-white rounded-full text-red-500 text-xl p-4 md:text-lg">
              <img src={green} alt="" className="rounded-full h-10 w-10" />
              <input type="text" className="flex justify-center"/>
              <h2 className="" htmlFor="">vs</h2>
              <input type="text"  className="flex justify-center"/>
              <img src={green} alt="" className="rounded-full h-10 w-10" />
            </div>
  

            {/* Contenedor del botón con un máximo de 500px de ancho */}
            <div className="w-auto text-center mt-10 mb-10">
              <button className="bg-[#090932] rounded-lg text-red-500 text-xs p-4 md:text-lg border border-red-500">
                Sortear
              </button>
            </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default Sorteo;

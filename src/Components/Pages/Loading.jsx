import React, { useEffect } from "react";
import bg from "../../assets/bg.jpg";
import { useNavigate } from "react-router-dom";
import LoadingContainer from "./LoadingContainer";

const Loading = () => {
  const navigate = useNavigate(); // Crea la instancia del hook useNavigate

  useEffect(() => {
    // Configura un temporizador que redirige después de 15 segundos
    const timer = setTimeout(() => {
      navigate("/findMatch"); // Redirige a /findMatch
    }, 11000); // 15000ms = 15 segundos

    // Limpia el temporizador si el componente sgit commit -m "first commit"e desmonta antes de los 15 segundos
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
 
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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


        <div className="flex justify-center pt-[200px]">
          <LoadingContainer />
        </div>
      </div>
    </>)
};

export default Loading;

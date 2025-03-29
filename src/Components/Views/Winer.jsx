import React from 'react'
import WinerContainer from '../Pages/WinerContainer'
import bg from "../../assets/bg.jpg";

const Winer = () => {

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
                    margin: "0%",

                }}>
                <div className="flex justify-center pt-[50px] text-xl text-white bold">
                    <h2>And the Winer is....</h2>

                </div>
                <div className="flex justify-center pt-[200px]">

                    <WinerContainer />
                </div>
                <div className="flex justify-center text-xl text-white bold pt-[100px]">
                    <button>Salir</button>
                </div>
            </div>
        </>)
}

export default Winer

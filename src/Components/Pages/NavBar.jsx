import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.jpg";


const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleScroll = (id) => {
        console.log(`Scrolling to section: ${id}`);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <nav className="bg-gradient-to-r from-[#090932] from-20% via-cyan-900 via-50% to-[#090932] to-90% text-xs flex justify-between items-center w-[100%] pr-4 md:text-lg border-t border-red-500 mx-auto pr-4">
                <h2 className="text-bold flex justify-start">
                    <img src={Logo} alt="" className="h-12 w-auto animate-pulse cursor-pointer" />
                </h2>
                <button onClick={() => navigate("/cargar")} className="pl-4 text-bold text-red-500 border-l border-red-500">
                    Crear jugadores
                </button>
                <button onClick={() => navigate("/jugadores")} className="pl-4 text-bold text-red-500 border-l border-red-500">
                    Jugadores
                </button>
                <button onClick={() => navigate("/sorteo")} className="pl-4 text-bold text-red-500 border-l border-red-500">
                    Sorteo
                </button>
                <button onClick={() => navigate("/puntos")} className="pl-4 text-bold text-red-500 border-l border-red-500">
                Cargar Puntos
                </button>
                <button onClick={() => navigate("/posiciones")} className="pl-4 text-bold text-red-500 border-l border-red-500">
                Tabla de Posiciones
                </button>

            </nav>
        </>
    );
};

export default Navbar;

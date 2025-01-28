import { FaWhatsapp } from "react-icons/fa";
import HeroLogo from "/src/assets/logos/Only-Hero-Logo.svg"

const Whatsapp = () => {

    return (
        <div className="bg-red-500 text-white rounded-full shadow-lg w-16 h-16 fixed bottom-4 right-4 flex items-center justify-center cursor-pointer group">
            <FaWhatsapp className="absolute transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 text-3xl" />
            <img src={HeroLogo} alt="Hero-Whatsapp" className="transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 h-8" />
        </div>
    );
};

export default Whatsapp;
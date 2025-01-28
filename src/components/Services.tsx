import Serv1 from "/src/assets/services-img/serv-1.png"
import Serv2 from "/src/assets/services-img/serv-2.png"
import Serv3 from "/src/assets/services-img/serv-3.png"

const Services = () => {


    return (
        <div className="services relative flex justify-center z-0">
            <div className="services-container bg-base-200 flex flex-col items-center justify-center gap-[3rem] w-[85%] md:w-2/3 mt-10 md:mt-20">

                <div className="services-title w-full">
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl font-bold">Nuestros servicios</h1>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-3xl">Lo que necesites</h2>
                </div>

                <div className="flex flex-col md:flex-row w-full justify-between items-center p-[1rem] gap-x-4 gap-y-8">

                    <div className="card group flex justify-center bg-base-100 shadow-lg h-full cursor-pointe transition-all duration-300 ease-in-out hover:translate-y-[-25px] cursor-pointer">
                        <figure className="h-full">
                            <img
                                src={Serv1}
                                alt="Serv1" className="h-full" />
                        </figure>
                        <div className="card-body flex gap-4">
                            <h2 className="card-title">Financiamiento 💸</h2>
                            <p>Adquiere tu moto de manera rápida y sencilla con nuestras opciones de financiamiento.</p>
                            <button className="p-2 w-full bg-base-300 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 ease-in-out rounded-lg">Saber más</button>
                        </div>
                    </div>

                    <div className="card group flex justify-center bg-base-100 shadow-lg h-full cursor-pointe transition-all duration-300 ease-in-out hover:translate-y-[-25px] cursor-pointer">
                        <figure className="h-full">
                            <img
                                src={Serv2}
                                alt="Serv2" className="h-full" />
                        </figure>
                        <div className="card-body gap-4">
                            <h2 className="card-title">Repuestos 🔧</h2>
                            <p>Encuentra todo lo que tu moto necesita con nuestra amplia gama de repuestos.</p>
                            <button className="p-2 w-full bg-base-300 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300 ease-in-out rounded-lg">Comprar repuestos</button>
                        </div>
                    </div>

                    <div className="card group flex justify-center bg-base-100 shadow-lg h-full cursor-pointe transition-all duration-300 ease-in-out hover:translate-y-[-25px] cursor-pointer">
                        <figure className="h-full">
                            <img
                                src={Serv3}
                                alt="Serv2"
                                className="h-full"
                            />
                        </figure>
                        <div className="card-body gap-4">
                            <h2 className="card-title">Mantenimiento 👨🏻‍🔧</h2>
                            <p>Cuida el rendimiento y la vida útil de tu moto con nuestros servicios especializados.</p>
                            <button className="p-2 w-full bg-base-300 rounded-lg transition-colors duration-300 ease-in-out group-hover:bg-red-500 group-hover:text-white">
                                Agendar cita
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
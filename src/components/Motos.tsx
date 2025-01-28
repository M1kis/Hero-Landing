import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

// Importar las imágenes
import Moto1 from "/src/assets/motos/moto-1.png";
import Moto2 from "/src/assets/motos/moto-2.png";
import Moto3 from "/src/assets/motos/moto-3.png";
import Moto4 from "/src/assets/motos/moto-4.png";
import Moto5 from "/src/assets/motos/moto-5.png";
import Moto6 from "/src/assets/motos/moto-6.png";

const Motos = () => {

    function SampleNextArrow({ onClick }: { onClick: () => void }) {
        return (
            <div className="arrow arrow-right" onClick={onClick}>
                <IoIosArrowDroprightCircle />
            </div>
        );
    }

    function SamplePrevArrow({ onClick }: { onClick: () => void }) {
        return (
            <div className="arrow arrow-left" onClick={onClick}>
                <IoIosArrowDropleftCircle />
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        nextArrow: <SampleNextArrow onClick={() => { }} />,
        prevArrow: <SamplePrevArrow onClick={() => { }} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="motos relativez-0">
            <div className=" slider-container bg-base-200 w-[85%] md:w-2/3 mt-20 m-auto">

                <div className="motos-title w-full">
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl font-bold">¡Ponle rumbo a tu aventura!</h1>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-3xl">Con nuestras motos</h2>
                </div>

                <Slider {...settings} className="motos-slider mt-[48px]">

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto1} // Usar la variable importada
                                        alt="ECO100" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        ECO 100
                                    </h2>
                                    <div className="badge badge-error text-white flex-shrink-0">
                                        Bono de $300.000
                                    </div>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$3'990.000</p>
                                    <p className="text-sm line-through">$4.990.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Classic</div>
                                    <div className="badge badge-outline">Ahorradora</div>
                                    <div className="badge badge-outline">100 CC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto2} // Usar la variable importada
                                        alt="ECOT" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        ECO-T
                                    </h2>
                                    <div className="badge badge-error text-white flex-shrink-0">
                                        Bono de $800.000
                                    </div>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$4.790.000</p>
                                    <p className="text-sm line-through">$5.590.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Ahorradora</div>
                                    <div className="badge badge-outline">Trabajo</div>
                                    <div className="badge badge-outline">100 CC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto3} // Usar la variable importada
                                        alt="ECODELUXE" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        ECO DELUXE
                                    </h2>
                                    <div className="badge badge-error text-white flex-shrink-0">
                                        Bono de $800.000
                                    </div>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$5.190.000</p>
                                    <p className="text-sm line-through">$5.990.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Ahorradora</div>
                                    <div className="badge badge-outline">IBS</div>
                                    <div className="badge badge-outline">100 CC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto4} // Usar la variable importada
                                        alt="HUNK160R4V" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        HUNK 160R 4V
                                    </h2>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$10.490.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Deportiva</div>
                                    <div className="badge badge-outline">ABS</div>
                                    <div className="badge badge-outline">FI</div>
                                    <div className="badge badge-outline">160 CC</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto5} // Usar la variable importada
                                        alt="HUNK150XTEC" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        HUNK 150 XTEC
                                    </h2>
                                    <div className="badge badge-success text-white flex-shrink-0">
                                        Nueva
                                    </div>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$8.290.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Carburada</div>
                                    <div className="badge badge-outline">150 CC</div>
                                    <div className="badge badge-outline">Full LED</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 md:w-[20rem] h-[400px] md:h-[380px] shadow cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
                        <div className="flex flex-col h-full justify-end">
                            <div className="pt-10">
                                <figure>
                                    <img
                                        src={Moto6} // Usar la variable importada
                                        alt="XPULSE200T" />
                                </figure>
                            </div>
                            <div className="card-body">
                                <div className="flex items-center justify-between flex-wrap gap-2">
                                    <h2 className="card-title text-lg flex-1 truncate">
                                        X-PULSE 200T
                                    </h2>
                                </div>
                                <p className="text-sm text-red-500">Precio 2025 desde:</p>
                                <div className="flex flex-wrap items-baseline w-fit gap-2">
                                    <p className="text-xl font-bold">$10.290.000</p>
                                </div>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Scrambler</div>
                                    <div className="badge badge-outline">200 CC</div>
                                    <div className="badge badge-outline">FI</div>
                                    <div className="badge badge-outline">ABS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Motos;
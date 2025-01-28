import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Entities = () => {

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    speed: 5000,
                    autoplaySpeed: 5000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    speed: 3000,
                    autoplaySpeed: 3000,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    speed: 1000,
                    autoplaySpeed: 1000,
                }
            }
        ]
    };

    const bankslides = [
        "/src/assets/logos/BanksLogos/Banco-Bogota-Logo.png",
        "/src/assets/logos/BanksLogos/Bbva-Logo.png",
        "/src/assets/logos/BanksLogos/Progreser-Logo.png",
        "/src/assets/logos/BanksLogos/Sufi-Logo.png"
    ];

    return (

        <div className="w-full m-auto mt-10 md:mt-20">
            <div>
                <Slider {...settings} className='banks-slider'>
                    {bankslides.map((p) => (
                        <div>
                            <img src={p} alt="" className=" h-15 md:h-20 mx-auto" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );

}

export default Entities;
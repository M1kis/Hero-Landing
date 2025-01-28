import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider1 from "/src/assets/Photos/hero-slider-1.jpg";
import Slider2 from "/src/assets/Photos/hero-slider-2.jpg";
import Slider3 from "/src/assets/Photos/hero-slider-3.jpg";

const Hero = () => {

    const settings = {
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const slides = [
        { id: "hero1", src: Slider1 },
        { id: "hero2", src: Slider2 },
        { id: "hero3", src: Slider3 },
    ];

    return (

        <div className="w-full m-auto">
            <div>
                <Slider {...settings} className="hero-slider">
                    {slides.map((slide) => (
                        <div key={slide.id}>
                            <img src={slide.src} alt={`Slide ${slide.id}`} className="h-[230px] md:h-full" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );

};

export default Hero;
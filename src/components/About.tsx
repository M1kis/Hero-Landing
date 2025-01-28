import ImagenAboutUs from "/src/assets/Photos/hero-about.jpg"

const About = () => {

    return (

        <div className="services relative flex justify-center z-0">
            <div className="services-container bg-base-200 flex flex-col items-center justify-center gap-[3rem] w-[85%] md:w-2/3 z-0 mt-14 md:mt-20">

                <div className="services-title w-full">
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl font-bold">Con <span className='text-red-500'>Hero</span></h1>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-3xl">No hay limites</h2>
                </div>

                <div className="flex flex-col md:flex-row w-full items-center gap-y-8">
                    <div className="hidden md:flex items-center justify-center h-full w-full md:w-1/2">
                        <img
                            src={ImagenAboutUs}
                            className="rounded-lg"
                        />
                    </div>

                    <div className='flex flex-col  h-full w-full md:w-1/2 justify-center items-center p-[1rem] gap-5'>

                        <div className="collapse collapse-arrow bg-base-100 shadow">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Gran trayectoria</div>
                            <div className="collapse-content">
                                <p>Más de 100 millones de motocicletas vendidas en todo el mundo. Hero, el fabricante número 1 de India,
                                    líder en innovación, calidad y confianza, respaldado por décadas de experiencia en la industria.
                                    Únete a millones de conductores que confían en Hero para cada viaje.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-base-100 shadow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Garantía pa' que ruede tranquilo, mijo</div>
                            <div className="collapse-content">
                                <p>4 años o 50,000 kilómetros, la mejor y más extensa del mercado. Hero te ofrece confianza y
                                    respaldo para que disfrutes de cada trayecto con total tranquilidad, sabiendo que estás protegido
                                    con una cobertura excepcional.</p>
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-base-100 shadow">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">40 años rodando</div>
                            <div className="collapse-content">
                                <p>Durante cuatro décadas hemos sido sinónimo de innovación, calidad y confianza, construyendo una trayectoria sólida
                                    que nos posiciona como líderes del camino. Cada kilómetro recorrido es un testimonio de nuestro compromiso con la
                                    satisfacción de millones de usuarios en todo el mundo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default About;
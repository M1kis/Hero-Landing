const ContactForm = () => {

    return (

        <div className="services relative flex justify-center z-0">
            <div className="services-container bg-base-200 flex flex-col items-center justify-center gap-[3rem] w-[85%] md:w-2/3 z-0 mt-14 md:mt-20">

                <div className="services-title w-full">
                    <h1 className="text-center text-2xl sm:text-2xl md:text-3xl font-bold">Quiero mi moto <span className='text-red-500'>Hero</span></h1>
                    <h2 className="text-center text-2xl sm:text-3xl md:text-3xl">Nosotros te llamamos</h2>
                </div>

                <div className="flex flex-col md:flex-row w-full items-center gap-y-8 p-[1rem]">

                    <div className="flex flex-col h-full w-full justify-center items-center">
                        <form action="mailto:tucorreo@example.com" method="post" className="bg-base-100 p-8 rounded-lg shadow-lg w-full max-w-2xl">
                            {/* Primera fila: Nombre y Apellido */}
                            <div className="flex flex-col md:flex-row gap-5 w-full mb-6">
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="nombre" className="font-semibold">Nombre:</label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="apellido" className="font-semibold">Apellido:</label>
                                    <input
                                        type="text"
                                        id="apellido"
                                        name="apellido"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                            </div>

                            {/* Segunda fila: Cédula y Celular */}
                            <div className="flex flex-col md:flex-row gap-5 w-full mb-6">
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="cedula" className="font-semibold">Cédula:</label>
                                    <input
                                        type="text"
                                        id="cedula"
                                        name="cedula"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="celular" className="font-semibold">Celular:</label>
                                    <input
                                        type="text"
                                        id="celular"
                                        name="celular"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                            </div>

                            {/* Tercera fila: Correo Electrónico y Moto de interés */}
                            <div className="flex flex-col md:flex-row gap-5 w-full mb-6">
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="email" className="font-semibold">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="motivo" className="font-semibold">Moto de interés:</label>
                                    <select
                                        id="motivo"
                                        name="motivo"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        <option value="" disabled selected>Selecciona una opción</option>
                                        <option value="consulta">ECO 100</option>
                                        <option value="soporte">ECO T</option>
                                        <option value="ventas">ECO DELUXE CLASICA</option>
                                        <option value="otros">ECO DELUXE</option>
                                        <option value="otros">XPULSE 200T</option>
                                        <option value="otros">HUNK 160R</option>
                                        <option value="otros">HUNK 160R 4V</option>
                                        <option value="otros">HUNK 150 XTEC</option>
                                    </select>
                                </div>
                            </div>

                            {/* Cuarta fila: Departamento y Ciudad */}
                            <div className="flex flex-col md:flex-row gap-5 w-full mb-6">
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="departamento" className="font-semibold">Departamento:</label>
                                    <select
                                        id="departamento"
                                        name="departamento"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        <option value="" disabled selected>Selecciona una opción</option>
                                        <option value="ANTIOQUIA">ANTIOQUIA</option>
                                        <option value="CUNDINAMARCA">CUNDINAMARCA</option>
                                        <option value="VALLE DEL CAUCA">VALLE DEL CAUCA</option>
                                        <option value="ATLÁNTICO">ATLÁNTICO</option>
                                        <option value="SANTANDER">SANTANDER</option>
                                        <option value="BOLÍVAR">BOLÍVAR</option>
                                        <option value="BOYACÁ">BOYACÁ</option>
                                        <option value="NARIÑO">NARIÑO</option>
                                        <option value="TOLIMA">TOLIMA</option>
                                        <option value="META">META</option>
                                    </select>
                                </div>
                                <div className="flex flex-col md:w-1/2 gap-2">
                                    <label htmlFor="ciudad" className="font-semibold">Ciudad:</label>
                                    <select
                                        id="ciudad"
                                        name="ciudad"
                                        required
                                        className="p-2 bg-base-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        <option value="" disabled selected>Selecciona una opción</option>
                                    </select>
                                </div>
                            </div>

                            {/* Botón de enviar */}
                            <div className="flex flex-col md:flex-row gap-5 w-full md:mb-6">
                                <button
                                    type="submit"
                                    className="bg-red-500 w-full p-3 rounded-lg text-white font-semibold hover:bg-red-600 transition-colors duration-300 ease-in-out"
                                >
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default ContactForm;
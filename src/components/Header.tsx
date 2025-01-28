import { useEffect, useState } from "react";

import HeroLogoLight from '/src/assets/logos/Hero_MotoCorp_Logo_Light.svg';
import HeroLogoDark from '/src/assets/logos/Hero_MotoCorp_Logo_Dark.svg';

import ColombiaFlag from '/src/assets/logos/colombia-flag.svg'
import ArgentinaFlag from '/src/assets/logos/argentina-flag.svg'
import MexicoFlag from '/src/assets/logos/mexico-flag.svg'
import PeruFlag from '/src/assets/logos/peru-flag.svg'

const Header = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const changeLogo = () => {
        return isDark ? HeroLogoDark : HeroLogoLight;
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-base-100 shadow-md p-2">
            <div className="navbar">
                {/* Navbar Start (Laptop, PC, Tablets) */}
                <div className="navbar-start hidden md:flex lg:flex">
                    <img src={changeLogo()} alt="Logo-Hero" className="w-16" />
                </div>

                {/* Navbar Center (Laptop, PC, Tablets) */}
                <div className="navbar-center hidden md:flex space-x-2">
                    <a className="btn btn-ghost rounded-btn">Inicio</a>
                    <div className="dropdown dropdown-hover">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost rounded-btn"
                            aria-label="Modelos"
                        >
                            Modelos
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-0 w-52 space-y-2 p-2 shadow-[0_4px_10px_rgba(0,0,0,0.6)] absolute"
                        >
                            <li>
                                <details>
                                    <summary>Trabajo</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><a>ECO 100</a></li>
                                        <li><a>ECO T</a></li>
                                        <li><a>ECO Deluxe Clásica</a></li>
                                        <li><a>ECO Deluxe</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Urbanas</summary>
                                    <ul className="bg-base-100 rounded-t-none p-2">
                                        <li><a>XPULSE 200T</a></li>
                                        <li><a>HUNK 160R</a></li>
                                        <li><a>HUNK 160R 4V</a></li>
                                        <li><a>HUNK 150 XTEC</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost rounded-btn">Financiamiento y promociones</a>
                    <a className="btn btn-ghost rounded-btn">Post venta</a>
                    <a className="btn btn-ghost rounded-btn">Sobre Hero 🏍️</a>
                </div>

                {/* Navbar (Móviles) */}
                <div className="navbar-start md:hidden lg:hidden">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn bg-base-200 lg:hidden"
                            aria-label="Abrir menú"
                            onClick={toggleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        {isOpen && (
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 space-y-2 p-2 shadow-[0_4px_10px_rgba(0,0,0,0.6)] absolute"
                            >
                                <li>
                                    <a>Inicio</a>
                                </li>
                                <li>
                                    <details>
                                        <summary>Modelos</summary>
                                        <ul className="p-2">
                                            <li>
                                                <details>
                                                    <summary>Trabajo</summary>
                                                    <ul className="bg-base-100 rounded-t-none p-2">
                                                        <li><a>ECO 100</a></li>
                                                        <li><a>ECO T</a></li>
                                                        <li><a>ECO Deluxe Clásica</a></li>
                                                        <li><a>ECO Deluxe</a></li>
                                                    </ul>
                                                </details>
                                            </li>
                                            <li>
                                                <details>
                                                    <summary>Urbanas</summary>
                                                    <ul className="bg-base-100 rounded-t-none p-2">
                                                        <li><a>XPULSE 200T</a></li>
                                                        <li><a>HUNK 160R</a></li>
                                                        <li><a>HUNK 160R 4V</a></li>
                                                        <li><a>HUNK 150 XTEC</a></li>
                                                    </ul>
                                                </details>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li>
                                    <a>Financiamiento</a>
                                </li>
                                <li>
                                    <a>Post venta</a>
                                </li>
                                <li>
                                    <a>Sobre Hero 🏍️</a>
                                </li>
                                <li className="bg-base-200 rounded-box">
                                    <label className="swap swap-rotate">
                                        <input
                                            type="checkbox"
                                            checked={isDark}
                                            onChange={toggleTheme}
                                        />

                                        <svg
                                            className={`swap-off w-5 fill-current ${isDark ? "hidden" : "block"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.5,5.5,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                        </svg>

                                        <svg
                                            className={`swap-on w-5 fill-current ${isDark ? "block" : "hidden"}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                        </svg>
                                    </label>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Navbar Center (Móviles) */}
                <div className="navbar-center md:hidden lg:hidden">
                    <img src={changeLogo()} alt="Logo-Hero" className="w-14" />
                </div>

                {/* Navbar End */}
                <div className="navbar-end space-x-3">
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <summary
                            tabIndex={0}
                            className="btn"
                            aria-label="Seleccionar país"
                            onClick={toggleDropdown}
                        >
                            <img src={ColombiaFlag} alt="Bandera de Colombia" className="w-5" />
                        </summary>
                        {isOpen && (
                            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-2 w-52 space-y-2 p-2 shadow-[0_4px_10px_rgba(0,0,0,0.6)] absolute ">
                                <li>
                                    <a className="flex items-center gap-x-2">
                                        <img src={PeruFlag} alt="Bandera de Perú" className="w-5" />
                                        Perú
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-x-2">
                                        <img src={MexicoFlag} alt="Bandera de México" className="w-5" />
                                        México
                                    </a>
                                </li>
                                <li>
                                    <a className="flex items-center gap-x-2">
                                        <img src={ArgentinaFlag} alt="Bandera de Argentina" className="w-5" />
                                        Argentina
                                    </a>
                                </li>
                            </ul>
                        )}
                    </div>

                    <label className="swap swap-rotate hidden md:flex lg:flex btn flex justify-center items-center">
                        <input
                            type="checkbox"
                            checked={isDark}
                            onChange={toggleTheme}
                            className="cursor-pointer hidden" // Opcional: oculta el input si no es necesario mostrarlo
                        />

                        <svg
                            className={`swap-off w-5 fill-current ${isDark ? 'hidden' : 'block'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        <svg
                            className={`swap-on w-5 fill-current ${isDark ? 'block' : 'hidden'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
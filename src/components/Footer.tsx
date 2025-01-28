import HeroLogo from '/src/assets/logos/Hero_MotoCorp_Logo_Light.svg';

const Footer = () => {

    return (

        <>
            <footer className="footer bg-base-300 text-base-content p-10 mt-14 md:mt-20">
                <nav>
                    <img src={HeroLogo} alt="" className='w-16'/>
                </nav>
                <nav>
                    <h6 className="footer-title">Servicios</h6>
                    <a className="link link-hover">Financiamiento</a>
                    <a className="link link-hover">Repuestos</a>
                    <a className="link link-hover">Mantenimiento</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Enlaces de interes</h6>
                    <a className="link link-hover">Sobre Hero</a>
                    <a className="link link-hover">Modelos</a>
                    <a className="link link-hover">Post venta</a>
                    <a className="link link-hover">Promociones</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terminos de uso</a>
                    <a className="link link-hover">Privacidad de politicas</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            <footer className="footer flex justify-center bg-base-300 text-base-content border-base-300 border-t px-10 py-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Hero Ltd</p>
                </aside>
            </footer>
        </>


    );

}

export default Footer;
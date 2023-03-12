import React from "react";
import "../assets/styles/sideMenu.css"
const SideMenu = () => {
    return (
        <header className="main-side-menu">

            <nav className="navSideMenu">

                <div>
                    <a href="#">Nosotros</a>
                </div>
                <div>
                    <a href="#">Pide aqui</a>
                </div>
                <div>
                    <a href="#">Carta</a>
                </div>
                <div>
                    <a href="#">Restaurant</a>
                </div>
                <div>
                    <a href="#">Ubicacion</a>
                </div>
                <div>
                    <a href="#">Reserva</a>
                </div>
                <div>
                    <a href="#">Cotiza tu evento</a>
                </div>
            </nav>
            <div className="mobileContent">
                <div className="navLogo">
                    <img className="navLogoImg" src="https://pescadoscapitales.cl/wp-content/uploads/2020/02/logo_pescados_ch2.png" alt="logo nav" />
                </div>
                <div class="dropdown">
                    <button class="dropbtn">
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <div class="dropdown-content">
                        <div>
                            <a href="#">Nosotros</a>
                        </div>
                        <div>
                            <a href="#">Pide aqui</a>
                        </div>
                        <div>
                            <a href="#">Carta</a>
                        </div>
                        <div>
                            <a href="#">Restaurant</a>
                        </div>
                        <div>
                            <a href="#">Ubicacion</a>
                        </div>
                        <div>
                            <a href="#">Reserva</a>
                        </div>
                        <div>
                            <a href="#">Cotiza tu evento</a>
                        </div>
                    </div>
                </div>
            </div>


        </header>
    )
}

export default SideMenu
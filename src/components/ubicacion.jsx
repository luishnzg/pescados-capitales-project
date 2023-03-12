import React from "react";
import "../assets/styles/ubicacion.css"
import "../assets/styles/mainStyles.css"

const Ubicacion = () => {
    return (
        <div className="mainContainers ubicacionMain mainContainersBoxShadow">
            <div className="ubicacionLogo-Top">
                <div className="ubicacionLogo">
                    <div className="ubicacionLogo-inner">
                        <img src="https://pescadoscapitales.cl/wp-content/uploads/2020/02/avaricia_ch.png" alt="logo-avaricia-ubicacion" />
                    </div>
                </div>
            </div>
            <div className="ubicacionInfoMap">
                <div className="ubicacionInfo-top">
                    <div className="ubicacionInfo-low">
                        <div className="ubicacionInfo-1">
                            <p>Ubicación y Contacto</p>
                        </div>
                        <div className="ubicacionInfo-2">
                            <p>Nueva Costanera 3723, Vitacura. </p>
                            <p>+56 22 894 1495</p>
                            <p> <a href="#">reservas@pescadoscapitales.cl</a></p>
                        </div>
                    </div>

                </div>
                <div className="ubicacionMap-top">
                    
                        <iframe className="iFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.8197691714304!2d-70.60017668480191!3d-33.401865980787875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf49d6ecbd35%3A0x7150e6bc19c36830!2sNueva%20Costanera%203723%2C%20Vitacura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1581545031611!5m2!1ses!2scl">

                        </iframe>
                    
                </div>
            </div>
        </div>
    )
}

export default Ubicacion

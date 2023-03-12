import React from "react";
import "../assets/styles/hoverBoxes.css"
import "../assets/styles/mainStyles.css"
const HoverBoxes = () => {
    return (
        <div className="mainContainers">
            <div className="mobileContentHoverBoxes">
                <div className="hoverImageDiv">
                    <img className="hoverImage" src="https://pescadoscapitales.cl/wp-content/uploads/2020/01/isotipo.png" alt="" />
                </div>
                <div className="hoverButtonDiv">
                    <button className="hoverBoxButton">
                        Pide Aqui
                    </button>
                </div>
            </div>
            <div className="hoverBoxes">
                <div>
                    <img className="hoverImage" src="https://pescadoscapitales.cl/wp-content/uploads/2020/02/M01.jpg" alt="" />
                </div>
                <div className="hoverBoxes1-2 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/Hover-nos-1.png" alt="" />
                        </span>
                    </a>
                </div>
                <div className="hoverBoxes1-3 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/Hover-carta.png" alt="" />
                        </span>
                    </a>
                </div>
                <div className="hoverBoxes1-4">
                    <a href="#">
                        <span >
                            <img src="http://pescadoscapitales.cl/wp-content/uploads/2020/07/PIDE02.png" alt="" />
                        </span>
                    </a>
                </div>
            </div>
            <div className="hoverBoxes">
                <div className="hoverBoxes2-1 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/Hover-ubicacion.png" alt="" />
                        </span>
                    </a>
                </div>
                <div className="hoverBoxes2-2 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/Restaurant.png" alt="" />
                        </span>
                    </a>
                </div>
                <div className="hoverBoxes2-3 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/EVENTOS.png" alt="" />
                        </span>
                    </a>
                </div>
                <div className="hoverBoxes2-4 background-box">
                    <a href="#">
                        <span >
                            <img className="hoverEffect" src="http://pescadoscapitales.cl/wp-content/uploads/2020/02/Hover-platos.png" alt="" />
                        </span>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default HoverBoxes
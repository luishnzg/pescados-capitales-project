import React, { useEffect, useState } from "react";
import "../assets/styles/sections.css"
import "../assets/styles/mainStyles.css"

const Sections = (
    {   styleBoxOrder,
        styleBoxGrandient,
        styleTextAlign,
        img,
        title,
        text1,
        text2,
        textButton,
    }) => {
    const [textAligning, setTextAlign] = useState("right");
    const [boxAOrder, setBoxAOrder] = useState(1);
    const [boxBOrder, setBoxBOrder] = useState();
    const [boxGradient, setBoxGradient] = useState("boxGradientBlue-toRight");
    const [boxShadowing, setBoxShadow] = useState();
    const [imgJustifyContent, setImageJustifyContent] = useState();
    useEffect(() => {
    styleBoxOrder !== undefined && setBoxAOrder(styleBoxOrder);
    styleBoxGrandient !== undefined && setBoxGradient(styleBoxGrandient);
    styleTextAlign !== undefined && setTextAlign(styleTextAlign);
    if (boxAOrder === 1) {
        setBoxShadow("10px 10px 7px -2px rgb(0 0 0 / 30%)");
        setImageJustifyContent("left")
        setBoxBOrder(2);
    }
    if (boxAOrder === 2 ) {
        setBoxShadow("-10px 10px 7px -2px rgb(0 0 0 / 30%)");
        setImageJustifyContent("right")
        setBoxBOrder(1);
    };
    
    }, [img, boxAOrder, styleBoxOrder, title, text1, text2, textButton, styleBoxGrandient, styleTextAlign])

    return (
        <div className="mainContainers sectionsMain mainContainersBoxShadow">

            <div className="sectionsMain-top">
            <div className="sections-leftBox" style={{ order: boxAOrder}}>
                <div className="mobile-align">
                    <div className="sections-leftBox-info" style={{ textAlign: textAligning }} >
                        <h1>{title}</h1>
                        <p >{text1}</p >
                        {text2 && <br />}
                        {text2 && <p className="paddingPText2">{text2}</p>}
                    </div>
                    {textButton && <button className="sectionButton" type="button">{textButton}</button>}
                </div>
            </div>
                <div className={`sections-rigthBox ${boxGradient}`} style={{ order: boxBOrder, justifyContent: imgJustifyContent }}>
                    <div className="sections-rigthBoxBackground">
                        <img className="sectionsImg" style={{ boxShadow: boxShadowing }} src={img} alt="image" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sections
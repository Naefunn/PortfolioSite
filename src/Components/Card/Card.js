import React from "react";
import "./Card.css";

const Card = ({img, heading, detail}) => {
    return(
        <div className="card">
            <img src={img} alt=""/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
        </div>
    )
}

export default Card
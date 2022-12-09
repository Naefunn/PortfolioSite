import React from "react";
import "./Card.css";
import {Link} from 'react-scroll'

const Card = ({img, heading, detail }) => {

    return(
        <div className="card">
            <img src={img} alt=""/>
            <span>{heading}</span>
            <span>{detail}</span>
            <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                <button className="c-button">LEARN MORE</button>
            </Link>
        </div>
    )
}

export default Card
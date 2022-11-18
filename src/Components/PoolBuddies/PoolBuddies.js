import { React, useState, useContext } from "react";
import './PoolBuddies.css';
import { SlideDataPB } from "./SlideDataPB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Context";



const PoolBuddies = ({ slides }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [current, setCurrent] =useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current - 1)
    }



    if (!Array.isArray(slides) || length <= 0) {
        return null;
    };

    return (
    <>
    <div className="poolbuddies-project" id="Projects">
        <span style={{color: darkMode? 'white': ''}} >Pool</span>
        <br/>
        <span>Buddies</span>
    </div>
    <section className="slider">
        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="left-arrow" onClick={prevSlide}/>
        <FontAwesomeIcon icon={faArrowAltCircleRight} className="right-arrow" onClick={nextSlide}/>
        {SlideDataPB.map((slide, index)=>{
        return (
            <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="" className="image"/>)}
                
            </div>
        )
        })}
    </section>
    </>
    )
}

export default PoolBuddies;
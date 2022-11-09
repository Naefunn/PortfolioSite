import { React, useState } from "react";
import './PoolBuddies.css';
import { SlideDataPB } from "./SlideDataPB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";




const PoolBuddies = ({ slides }) => {
const [current, setCurrent] =useState(0);
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
};

const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
}

console.log(current)


if (!Array.isArray(slides) || length <= 0) {
    return null;
};

    return (
    <>
    <div className="poolbuddies-project">
        <span>This is my</span>
        <br/>
        <span>Capstone Project</span>
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
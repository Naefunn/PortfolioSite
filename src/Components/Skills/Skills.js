import React from "react";
import './Skills.css';
import PythonLogo from "../../assets/images/pythonLogo.png";
import JSLogo from "../../assets/images/JSlogo.png";
import JavaLogo from "../../assets/images/javaLogo.png";
import Card from "../Card/Card";
import cv from "./nfcv.pdf"


const Skills = () => {
    return (
        <>
        <div className="skills">
            <div className="skills-left">
                <span>My</span>
                <span>Skills</span>
                <span>fhjdlsbgjk,d sakvlnjklbgjkds avkjl fhjsvgb hjdfs vj
                <br/>
                fnjierngjilbfesjklgbhjbesgjhkfbsjvkfhdjklwvhf
                </span>
                <a href={cv} download>

                <button className="button s-button">Download CV</button>
                </a>
            </div>
            
            <div className="skills-right">
                
                <div style={{left: '14rem',}}>
                    <Card  
                    img = {PythonLogo}
                    heading = {'Python'}
                    detail = {'python stuff'}
                    />
                </div>
                <div style={{top: '12rem',left: '-4rem',}}>
                    <Card  
                    img = {JSLogo}
                    heading = {'JavaScript'}
                    detail = {'JavaScript stuff'}
                    />
                </div>
                <div style={{top: '19rem',left: '12rem',}}>
                    <Card  
                    img = {JavaLogo}
                    heading = {'Java'}
                    detail = {'Java stuff'}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;

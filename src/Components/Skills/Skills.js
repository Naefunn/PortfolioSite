import { useContext, React} from "react";
import './Skills.css';
import PythonLogo from "../../assets/images/pythonLogo.png";
import JSLogo from "../../assets/images/JSlogo.png";
import JavaLogo from "../../assets/images/javaLogo.png";
import Card from "../Card/Card";
import cv from "./nfcv.pdf";
import { ThemeContext } from "../../Context";

const Skills = () => {


    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    return (
        <>
        <div className="skills" id="Skills"
        >
            <div className="skills-left"
            >
                <span style={{color: darkMode? 'white': ''}} >My</span>
                <span>Skills</span>
                <span>Throughout my time at Codeclan, I have learned
                <br/>
                many skills, including: 3 programming languages,
                <br/>
                multiple frameworks, TDD, as well as soft skills
                <br/>
                such as presenting and working efficiently in teams. 
                </span>
                <a href={cv} download>

                <button className="button s-button">Download CV</button>
                </a>
            </div>
            
            <div className="skills-right">
                
                <div 
                style={{top: '2rem' ,left: '3.8rem',}}>
                    <Card  
                    img = {PythonLogo}
                    heading = {'Python'}
                    detail = {'Flask, UnitTesting'}
                    href='Python'
                    />
                </div>
                <div style={{top: '2rem',left: '-10rem',}}>
                    <Card  
                    img = {JSLogo}
                    heading = {'JavaScript'}
                    detail = {'Node, React, Cypress'}
                    />
                </div>
                <div style={{top: '2rem',left: '17.6rem',}}>
                    <Card  
                    img = {JavaLogo}
                    heading = {'Java'}
                    detail = {'Spring, JUnit, IntelliJ'}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;

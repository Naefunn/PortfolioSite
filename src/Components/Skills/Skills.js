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
                <span>fhjdlsbgjk,d sakvlnjklbgjkds avkjl fhjsvgb hjdfs vj
                <br/>
                fnjierngjilbfesjklgbhjbesgjhkfbsjvkfhdjklwvhf
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
                    detail = {'python stuff'}
                    />
                </div>
                <div style={{top: '2rem',left: '-10rem',}}>
                    <Card  
                    img = {JSLogo}
                    heading = {'JavaScript'}
                    detail = {'JavaScript stuff'}
                    />
                </div>
                <div style={{top: '2rem',left: '17.6rem',}}>
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

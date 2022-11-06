import React from "react";
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faPython,
    faJs,
    faJava
  } from '@fortawesome/free-brands-svg-icons';
import portimage from'../../assets/images/greySelfie.png';
import Floaters from "../Floaters/Floaters";
import codeTag from "../../assets/images/codeTags.png";

const About = () => {
    return (
        <div className="intro">
            <div className="a-left">
                <div className="a-name">
                    <span>Hi, I'm</span>
                    <span>Nathan Foster</span>
                    <span>
                    I'm a driven and passionate Software Developer who has just successfully completed a Professional Software Development Course at CodeClan, gaining industry-relevant experience in designing and developing applications that respond to specific briefs. 
                    After securing this qualification, which has built upon my existing foundation software development knowledge after two self-taught years, I'm now keen to continue my development in Scotland's fast-paced and dynamic tech industry.
                    </span>
                </div>
                <button className="button a-button">Contact Me</button>
                
                <div className="a-icons">

                    <a href="https://www.linkedin.com/in/nathan-d-foster/">
                    <FontAwesomeIcon
                    icon={faLinkedin}/>
                    </a>

                    <a href="https://github.com/Naefunn">
                    <FontAwesomeIcon
                    icon={faGithub}/>
                    </a>
                
                </div>
            </div>
            <div className="a-right">
            
            <img src={portimage} alt=""/>
            
            <div className="python-icon">
            <FontAwesomeIcon icon={faPython}/>
            </div>
            <div className="js-icon">
            <FontAwesomeIcon icon={faJs}/>
            </div>
            <div className="java-icon">
            <FontAwesomeIcon icon={faJava}/>
            </div>
            
            <div style={{top: '-4%', left: '55%' }}>
                <Floaters image={codeTag} txt1="Software" txt2="Developer"/>
            </div>
            
            </div>
        </div>
    )
}

export default About;
import {React, useContext} from "react";
import './Intro.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faPython,
    faJs,
    faJava
  } from '@fortawesome/free-brands-svg-icons';
import portimage from'../../assets/images/greySelfie.png';
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-scroll'
import { ThemeContext } from "../../Context";


const Intro = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="intro">
            <div className="a-left">
                <div className="a-name">
                    <span style={{color: darkMode? 'white': ''}}>Hi, I'm</span>
                    <span>Nathan Foster</span>
                    <span>
                        Welcome to my portfolio website. Have a look about
                        <br/>
                         and get to know a little bit about
                         me!
                    </span>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className="button a-button">Contact Me</button>
                </Link>
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
            
            <div>
                <FontAwesomeIcon icon={faTerminal}/>
                Software Developer
            </div>
            
            <img src={portimage} alt=""/>
            
            <div className="code-icons">
            <FontAwesomeIcon icon={faPython}/>
            <FontAwesomeIcon icon={faJava}/>
            <FontAwesomeIcon icon={faJs}/>
            </div>
            
            </div>
        </div>
    )
}

export default Intro;
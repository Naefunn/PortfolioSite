import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';
import {Link} from 'react-scroll';



const Navbar = () => {
    return (
      <div className="nav-wrapper">
        <div className="nav-left">
            <div className="nav-name">Nathan</div>
            <Toggle/>
        </div>
        <div className="nav-right">
            <div className="nav-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true} activeClass='activeClass'>
                        <li>About</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass='activeClass'>
                        <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true} activeClass='activeClass'>
                        <li>Projects</li>
                    </Link>
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
            <button className="button n-button">
                Contact Me
            </button>
            </Link>
        </div>
      </div>  
    )
}

export default Navbar;
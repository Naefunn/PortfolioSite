import React from "react";
import Toggle from "../Toggle/Toggle";
import './Navbar.css';



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
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                </ul>
            </div>
            <button className="button n-button">
                Contact Me
            </button>
        </div>
      </div>  
    )
}

export default Navbar;
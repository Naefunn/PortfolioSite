import {React, useContext} from 'react'
import './About.css'
import { ThemeContext } from '../../Context';

const About = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="about" id='About'>
    <div className="about-left">
        <span style={{color: darkMode? 'white': ''}}>More About</span>
        <span>Me!</span>
        <span>
            Hi, my name is Nathan Foster. I have recently graduated from a 16 week intensive coding bootcamp at CodeClan. Previously, I attended heriot watt university in 2011 studying physics, but after 2 years I felt university wasn’t for me and left. I then got a job in hospitality industry, starting out as bar tender and working my way up to bar manager. After 7 years in the hospitality industry I found the job wasn’t fulfilling me anymore and wanted to change career. My initial interest in coding started through my passion for gaming and wanting to understand how games are made and how they work. I first looked at Udemy courses to see what coding was really about and that when I realised that I enjoyed it and that this could be a real career. That’s when I heard about code clan from a friend and decided that this was an opportunity to change to a career that I would love. 
        </span>
    </div>
    </div>
  )
}

export default About
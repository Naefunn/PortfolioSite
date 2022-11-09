import React from "react";
import './project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import py1 from '../../assets/images/pyPro1.png';
import py2 from '../../assets/images/pyPro2.png';
import py3 from '../../assets/images/pyPro3.png';


const Project = () => {
    
    return (
        <div className="projects">
            <span>My Project</span>
            <span>Portfolio</span>


            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className="projects-slider"
            >
               <SwiperSlide>
                    <img src={py1} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={py2} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={py3} alt=""/>
                </SwiperSlide> 
            </Swiper>
{/* 
            <Swiper className="js-project">
               <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 
            </Swiper> */}

            {/* <Swiper className="dapp-project">
               <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 

                <SwiperSlide>
                    <img src={} alt=""/>
                </SwiperSlide> 
            </Swiper> */}
        </div>
    )
}


export default Project;
"use client"
import React, { useRef, useState } from 'react';

import styles from '@/app/styles/ProjectsSection.module.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import './projectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { IconContext } from "react-icons";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact,FaJava,FaPython,FaGitAlt,FaGithub} from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { PiFileSql } from "react-icons/pi";
const Projects = () => {
  return (
  
   
    <div className={styles.projectdiv}>
      <Image
        src="/bgimage.jpg"
        alt="bg-image"
        className={styles.Img}
        fill={true}
        priority={false}
      />
      <h1> My Skills</h1>

      <div className='projectswipercontainer'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          
          <SwiperSlide>
            <div className={styles.projectcard}>
             <IconContext.Provider value={{ color: "green",size:"10em" }}>
              <div><FaHtml5 /></div>
             </IconContext.Provider>
            <h1>HTML</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green",size:"10em" }}>
              <div><IoLogoCss3 /></div>
             </IconContext.Provider>
              <h1>CSS</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green",size:"10em" }}>
              <div><TbBrandJavascript /></div>
             </IconContext.Provider>
              <h1>JavaScript</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <div>
            <IconContext.Provider value={{ color: "green",size:"4em" }}>
                <span>
                  <SiMongodb />
                </span>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "green",size:"4em" }}>
                <span>
                 <FaNode />
                </span>
              </IconContext.Provider>
            </div>
              <div>  
              <IconContext.Provider value={{ color: "green",size:"4em" }}>
                <span>
                  <FaReact />
                </span>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "green",size:"4em" }}>
                <span>
                  <TbBrandNextjs />
                </span>
              </IconContext.Provider>
              </div>
              <h1>MERN Stack</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green",size:"10em" }}>
              <div><FaJava/></div>
             </IconContext.Provider>
              <h1>Java</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green",size:"10em" }}>
              <div><FaPython /></div>
             </IconContext.Provider>
              <h1>Python</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green", size: "4em" }}>
                <div>
                <span>< FaGitAlt /></span>
                <span><FaGithub /></span> 
                </div>
             </IconContext.Provider>
              <h1>Git & GitHub</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
              <IconContext.Provider value={{ color: "green", size: "10em" }}>
              <div><PiFileSql /></div>
             </IconContext.Provider>
              <h1>SQL</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      
      </div>
    </div>
  
  )
}

export default Projects
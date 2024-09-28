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
      <h1>My Projects</h1>

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
             <div><h1>Wanderlust-Airbnb clone</h1></div> 
              <div><p>Wanderlust: An Airbnb clone developed with MongoDB, Node.js, and Express.js, providing a comprehensive collection of hotel listings.</p></div>
              <div><p>Skills-HTML, CSS, JavaScript, Node.js, MongoDB, Express.js</p></div>

              <div>
                <span><a href="https://github.com/sindhureddy-6/Wanderlust">GitHub</a></span>
                <span><a href="https://wanderlust-x9iu.onrender.com/">Live Site</a></span>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
             <div><h1>Edu-World</h1></div> 
              <div><p>The Learning Management System (LMS) is an online platform designed to facilitate learning interactions between educators and students.</p></div>
              <div><p>Skills-HTML, CSS, JavaScript, Node.js, PostgresSQl, Express.js</p></div>

              <div>
                <span><a href="https://github.com/sindhureddy-6/Learning-Management-System">GitHub</a></span>
                <span><a href="https://eduworld-aymq.onrender.com/">Live Site</a></span>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
             <div><h1>AI-Text-Summarizer-App</h1></div> 
              <div><p>Text Summarizer Web App: Using OpenAI&apos;s powerful GPT models, this project simplifies text summarization. </p></div>
              <div><p>Skills-HTML, CSS, JavaScript and OpenAI&apos;s API</p></div>

              <div>
                <span><a href="https://github.com/sindhureddy-6/AI-Text-Summarizer-App">GitHub</a></span>
                <span><a href="https://ai-text-summarizer-app-u3hz.onrender.com/">Live Site</a></span>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
             <div><h1> Smarter Tasks</h1></div> 
              <div><p>”Smarter Tasks,” a project management system.Integrated PupilFirst API for backend services to manage tasks and data flow. </p></div>
              <div><p>Skills-Reactjs,TypeScript</p></div>

              <div>
                <span><a href="https://github.com/sindhureddy-6/WD301/tree/main/smarter-tasks">GitHub</a></span>
                <span><a href="https://sm-tasks.netlify.app/">Live Site</a></span>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.projectcard}>
             <div><h1>Banking Management System</h1></div> 
              <div><p>A CLI-based banking management System with features such as user registration, account management, and
secure transactions. </p></div>
              <div><p>Skills-Java, JDBC, MySQL</p></div>

              <div>
                <span><a href="https://github.com/sindhureddy-6/JDBC_PROJECT">GitHub</a></span>
                <span><a href="https://github.com/sindhureddy-6/JDBC_PROJECT">Live Site</a></span>
              </div>
              
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
   
  )
}

export default Projects
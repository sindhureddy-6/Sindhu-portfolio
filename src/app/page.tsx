"use client"
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PortfolioSection from "@/components/PortfolioSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import { useRef } from "react";


export default function Home() {
    const homeRef = useRef<HTMLDivElement | null>(null); 
  const aboutRef = useRef<HTMLDivElement | null>(null); 
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null); 
  const contactRef = useRef<HTMLDivElement | null>(null);
  return (
   
    <div>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef} />
       <div ref={homeRef} id="home-section">
        <PortfolioSection /> 
         </div>
      <div ref={aboutRef} id="about-section">
        <AboutSection />
      </div>
       <div ref={projectsRef} id="projects-section">
        <ProjectsSection />
      </div>
       <div ref={skillsRef} id="projects-section">
        <SkillSection /> 
      </div>
      <div ref={contactRef} id="contact-section">
      <ContactSection />
      </div>
      <Footer/>
  
  </div>
  );
}

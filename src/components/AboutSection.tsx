import React from 'react'
import styles from '@/app/styles/AboutSection.module.css'
import aboutImg from '@/assets/profile-pic (1).png'
import Image from 'next/image'
function AboutSection() {
  return (
    <div className={styles.about}>
      <Image
        src="/bgimage.jpg"
        alt="bg-image"
        className={styles.Img}
        fill={true}
        priority={false}
      />
      <div className={styles.textdiv}>
        <h1>About me</h1>
        <p>💻 I am a Final year Computer Science student from <b>Institute of Aeronautical Engineering,Hyderabad </b>, passionate about full stack web development and programming.</p>
        <p>🌟 I love building web apps and tackling challenges. Currently, I&apos;m honing my skills in HTML, CSS, JavaScript, MERN stack, Next.js, and TypeScript. Currently, I&apos;m exploring Docker and AWS.</p>
        <p>🌟My commitment to clean, efficient code ensures easy maintenance and scalability. </p>
        <p>🔍 Seeking internship opportunities in web development to further enhance skills and gain hands-on experience.</p>
      </div>
      <Image src={aboutImg} alt="aboutImg" quality={100} />
    </div>
    
  )
}

export default AboutSection
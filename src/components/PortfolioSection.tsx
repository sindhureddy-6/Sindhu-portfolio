import React from 'react'
import styles from '@/app/styles/PortfolioSection.module.css'
import Image from 'next/image'
import { TransformStreamDefaultController } from 'node:stream/web'
function PortfolioSection() {
  return (
    <div className={styles.pf_outer}>
      <Image
        src="/bgimage.jpg"
        alt="bg-image"
        className={styles.Img}
        priority={false}
        fill={true}
      />
    
      <div className={styles.home_content}>
        <div className={styles.text}>
           <div className={styles.h}>Hello, my name is</div>
           <div className={styles.name}>Reddyvari Sai Sindhu</div>
         </div>
        <div className={styles.animations}>
          <div className={styles.static_text}>
          I'm a  </div>
        
        <ul className={styles.dynamic_txts}>
          <li><span>Web Developer</span></li>
          <li><span>Java Programmer</span></li>
           <li><span>Coding Enthusiast</span></li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSection
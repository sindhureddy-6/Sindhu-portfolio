import React from 'react'
import styles from '@/app/styles/Footer.module.css'
import Image from 'next/image'
function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        src="/bgimage.jpg"
        alt="bg-image"
        className={styles.Img}
        fill={true}
        priority={false}
      />
      <p>Created By <b>Sindhu Reddyvari</b>&copy; 2024 All rights reserved.</p>
     
</div>
  )
}

export default Footer
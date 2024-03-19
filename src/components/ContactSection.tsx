import React from 'react'
import styles from '@/app/styles/ContactSection.module.css';
import Image from 'next/image';
const ContactSection = () => {
  return (
    <div className={styles.section4outermost}>
      <Image
        src="/bgimage.jpg"
        alt="bg-image"
        className={styles.Img}
        fill={true}
        priority={false}
      />
      <div className={styles.left}>
        <p>If you are Looking for a web developer or need
          help with your project then feel free to contact me at &nbsp;
          <span>sindhureddyvari3@gmail.com</span>
        </p>
      </div>

      <div className={styles.right}>
        <h1>
          Let&apos;s<br />
          Work<br />
          together
        </h1>
      </div>
    </div>
  )
}

export default ContactSection
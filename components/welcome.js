import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className={styles.welcomediv}>
      <div className={styles.WelDivText}>
        <h1>
          Hello, I'm a Welcome component! Hello, I'm a Welcome component!Hello,
          I'm a Welcome component!Hello, I'm a Welcome component!
        </h1>
      </div>
      <div className={styles.WelDivImg}>
        <Image
            className={styles.welcomejpg}
            src="/images/profile.jpg"
            alt="kitchen"
            height={144}
            width={144}
        />
      </div>
    
    </div>
  );
};

export default Welcome;

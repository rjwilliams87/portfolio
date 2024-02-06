// components/RotatingText.js
import React from "react";

import styles from "./rotating-cta.module.css";
// components/RotatingCurvedText.js

export const RotatingCTA = ({ text }: { text: string }) => {
  const content = [" ", ...text.split("")].map((char, index) => {
    return (
      <span className={styles.letter} style={{ transform: `rotate(${index * 10}deg)` }}>
        {char}
      </span>
    );
  });

  return (
    <div className={styles.circle}>
      <div className={styles.logo}></div>
      <div className={styles.text}>
        <p>{content}</p>
      </div>
    </div>
  );
};

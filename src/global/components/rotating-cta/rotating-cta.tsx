"use-client";

import React from "react";

import styles from "./rotating-cta.module.css";

const Letter = (char: string, index: number) => {
  return (
    <span
      key={`letter-${index}`}
      className={styles.letter}
      style={{ transform: `rotate(${index * 10}deg)` }}
    >
      {char}
    </span>
  );
};

export const RotatingCTA = ({ text }: { text: string }) => {
  const content = text.split("").map(Letter);

  return (
    <div className={styles.circle}>
      {/* <div className={styles.text}>
        <p>{content}</p>
      </div> */}
    </div>
  );
};

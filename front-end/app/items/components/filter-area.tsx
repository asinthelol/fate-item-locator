"use client";
import React, { useState } from "react";
import styles from "../scss/filter-area.module.scss"

function GradientCircle({ id }: { id?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 120 120">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "rgb(89, 118, 186)", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "rgba(102, 84, 208, 0.5)", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle className={styles.circle} id={id} cx="60" cy="60" r="50" strokeWidth="10" />
    </svg>
  );
}

export default function FilterArea() {

  const [rarityOpen, setRarityOpen] = useState(false);
  const [arcOpen, setArcOpen] = useState(false);
  const [rClassState, setRClassState] = useState('hidden');
  const [aClassState, setAClassState] = useState('inactive');


  const filterClick = (filter: boolean, type: 'rarity' | 'arc') => {
    if (type === 'rarity') {
      setRarityOpen(!filter);
      setRClassState(filter ? 'inactive' : 'active');
    } else if (type === 'arc') {
      setArcOpen(!filter);
      setAClassState(filter ? 'inactive' : 'active');
    }
  }

  return (
    <div id={styles["filter-area"]}>
      <div id={styles.top}>
        <p>Filter</p>
      </div>

      <div id={styles.bottom}>

        <div className={styles["filter-holder"]}>
          <div className={styles["filter-name-holder"]}>
            <svg className={styles[rClassState]}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"  fill="#F2EFEA" onClick={() => filterClick(rarityOpen, "rarity")}><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            <p >Rarity</p>
          </div>
          <ul className={`${styles.dropdown} ${rarityOpen ? styles.active : styles.inactive}`} id={styles["dp-one"]}>
            <li className={styles[rClassState]}>All <GradientCircle id={styles.circleOne} /></li>
            <li className={styles[rClassState]}>Bronze <GradientCircle id={styles.circleTwo} /></li>
            <li className={styles[rClassState]}>Silver <GradientCircle id={styles.circleThree} /></li>
            <li className={styles[rClassState]}>Gold <GradientCircle id={styles.circleFour} /></li>
          </ul>
        </div>

        <div className={styles["filter-holder"]}>
          <div className={styles["filter-name-holder"]} onClick={() => filterClick(arcOpen, "arc")}>
            <svg className={styles[aClassState]}xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"  fill="#F2EFEA"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            <p>Arc</p>
          </div>
          <ul className={`${styles.dropdown} ${styles[aClassState]}`} id={styles["dp-two"]}>
            <li className={styles[aClassState]}>All <GradientCircle id={styles.circleOne} /></li>
            <li className={styles[aClassState]}>Bronze <GradientCircle id={styles.circleTwo} /></li>
            <li className={styles[aClassState]}>Silver <GradientCircle id={styles.circleThree} /></li>
            <li className={styles[aClassState]}>Gold <GradientCircle id={styles.circleFour} /></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
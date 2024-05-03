"use client";
import React, { useState } from "react";
import styles from "../scss/filter-area.module.scss"

export default function FilterArea() {

  // State to track the open/close status of rarity and arc filters.
  const [filterState, setFilterState] = useState({
    rarity: { open: false, classState: 'hidden' },
    arc: { open: false, classState: 'hidden' },
  });

  // Toggle function to switch between open and close states.
  const filterClick = (type: 'rarity' | 'arc') => {
    setFilterState(prevState => ({
      ...prevState,
      [type]: {
        open: !prevState[type].open,
        classState: prevState[type].open ? 'inactive' : 'active',
      },
    }));
  }

  // Filter options.
  const rOptions = ['Bronze', 'Silver', 'Gold'];
  const aOptions = ['Arc 1', 'Arc 1.5', 'Arc 2', 'Arc 2.5'];

  // State to track the checked status of the filter options.
  // I tried applying the same array format as the filter options but I got mad
  // so I'm just going to use two separate arrays.
  const [rcheckedStatus, setRCheckedStatus] = useState(rOptions.map(() => true));
  const [acheckedStatus, setACheckedStatus] = useState(aOptions.map(() => true));

  // Handle checkbox state change.
  const handleCheck = (type: string, index: number) => {
    if (type === "rarity") {
      setRCheckedStatus((prev) =>
        prev.map((status, i) => (i === index ? !status : status))
      );
    } else {
      setACheckedStatus((prev) =>
        prev.map((status, i) => (i === index ? !status : status))
      );
    }
  };

  // Log what object is checked. Use to make sure the items
  // showing are the ones that are checked.
  const logCheckedStatus = (name: string, checked: boolean) => {
    console.log(JSON.stringify({ name, checked }));
  }


  return (
    <div id={styles["filter-area"]}>
      <div id={styles.top}>
        <p>Filter</p>
      </div>

      <div id={styles.bottom}> {/* Where the filters are. */}


        {/*
          Important to note that you can click on every part of the filter option but the 
          check button. I know it is a problem, but I kept running into a problem where
          I could check the button if I clicked on it, but not if I clicked anywhere
          else in the list item.
        */}
        <div className={styles["filter-holder"]}>
          <div className={styles["filter-name-holder"]} onClick={() => filterClick("rarity")}>
            <svg className={styles[filterState.rarity.classState]} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"  fill="#F2EFEA">
              <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
            </svg>
            <p >Rarity</p>
          </div>

          <ul className={`${styles.dropdown} ${filterState.rarity.open ? styles.active : styles.inactive}`} id={styles["dp-one"]}>
            {rOptions.map((option: string, index: number) => (
              <li 
                key={index} 
                className={styles[filterState.rarity.classState]} 
                onClick={(event) => {
                  event.stopPropagation();
                  handleCheck('rarity', index);
                  // logCheckedStatus(option, rcheckedStatus[index]); // expected output: {"name":"Bronze","checked":true}
                }} 
              >
                <label htmlFor={`rOption${index}`}>{option}</label>
                <input
                  className={styles.circleCheckbox}
                  type="checkbox"
                  name={option}
                  checked={rcheckedStatus[index]}
                  onChange={(event) => {
                    event.stopPropagation();
                  }}
                  onClick={(event) => {event.stopPropagation()}}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["filter-holder"]}>
          <div className={styles["filter-name-holder"]} onClick={() => filterClick("arc")}>
            <svg className={styles[filterState.arc.classState]} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"  fill="#F2EFEA"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            <p>Arc</p>
          </div>
          <ul className={`${styles.dropdown} ${filterState.arc.open ? styles.active : styles.inactive}`} id={styles["dp-two"]}>
            {aOptions.map((option: string, index: number) => (
              <li 
                key={index} 
                className={styles[filterState.arc.classState]} 
                onClick={(event) => {
                  event.stopPropagation();
                  handleCheck('arc', index);
                  // logCheckedStatus(option, acheckedStatus[index]); // expected output: {"name":"Arc 1","checked":true}
                }}
              >
                <label htmlFor={`aOption${index}`}>{option}</label>
                <input
                  className={styles.circleCheckbox}
                  type="checkbox"
                  name={option}
                  checked={acheckedStatus[index]}
                  onChange={(event) => event.stopPropagation()}
                  onClick={(event) => event.stopPropagation()}
                />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
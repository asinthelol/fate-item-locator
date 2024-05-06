"use client";
import React, { useState } from "react";
import styles from "../scss/filter-area.module.scss"

export default function FilterArea() {

  // State to track the open/close status of rarity and type filters.
  // Yes, when you get the filter state, you will have to write filterState.type.
  // I'm sorry about that.
  const [filterState, setFilterState] = useState({
    rarity: { open: false, classState: 'hidden' },
    type: { open: false, classState: 'hidden' },
  });

  // Toggle function to switch between open and close states.
  const filterClick = (type: 'rarity' | 'type') => { // Type is different from the option category "type".
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
  const tOptions = ['Material', 'Monument', 'Gem',];

  // State to track the checked status of the filter options.
  // I tried applying the same array format as the filter options but I got mad
  // so I'm just going to use two separate arrays.
  const [rCheckedStatus, setRCheckedStatus] = useState(rOptions.map(() => true));
  const [tCheckedStatus, setTCheckedStatus] = useState(tOptions.map(() => true));

  // Handle checkbox state change.
  const handleCheck = (type: string, index: number) => { // Type is different from the option category "type".
    if (type === "rarity") {
      setRCheckedStatus((prev) =>
        prev.map((status, i) => (i === index ? !status : status))
      );
    } else {
      setTCheckedStatus((prev) =>
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

          <ul className={`${styles.dropdown} ${filterState.rarity.open ? styles.active : styles.inactive}`}>
            {rOptions.map((option: string, index: number) => (
              <li 
                key={index} 
                className={styles[filterState.rarity.classState]} 
                onClick={(event) => {
                  event.stopPropagation();
                  handleCheck('rarity', index);
                  // logCheckedStatus(option, rCheckedStatus[index]); // expected output: {"name":"Bronze","checked":true}
                }} 
              >
                <label htmlFor={`rOption${index}`}>{option}</label>
                <input
                  className={styles.circleCheckbox}
                  type="checkbox"
                  name={option}
                  checked={rCheckedStatus[index]}
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
          <div className={styles["filter-name-holder"]} onClick={() => filterClick("type")}>
            <svg className={styles[filterState.type.classState]} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"  fill="#F2EFEA"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
            <p>Type</p>
          </div>
          <ul className={`${styles.dropdown} ${filterState.type.open ? styles.active : styles.inactive}`}>
            {tOptions.map((option: string, index: number) => (
              <li 
                key={index} 
                className={styles[filterState.type.classState]} 
                onClick={(event) => {
                  event.stopPropagation();
                  handleCheck('type', index);
                  // logCheckedStatus(option, tCheckedStatus[index]); // expected output: {"name":"type 1","checked":true}
                }}
              >
                <label htmlFor={`tOption${index}`}>{option}</label>
                <input
                  className={styles.circleCheckbox}
                  type="checkbox"
                  name={option}
                  checked={tCheckedStatus[index]}
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
import styles from "../scss/input.module.scss";

type InputProps = {
  htmlFor: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

import React from "react"; // Add missing import statement

export default function Input({htmlFor, type, id, name, placeholder}: InputProps) {
  return (
    <>
      <input className={styles.input} id={id} type={type} name={name} placeholder={placeholder}/>
      <label htmlFor={htmlFor}>
        <span className={styles.srOnly}>Input</span>
      </label>
    </>
  );
}
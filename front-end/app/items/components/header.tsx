import React from "react";
import styles from "../scss/header.module.scss";

export default function Header() {
  return (
    <header id={styles.header}>
      <h1>Items</h1>
      <p>Get to searching.</p>
    </header>
  );
}
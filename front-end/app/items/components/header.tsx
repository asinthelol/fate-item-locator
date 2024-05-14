import styles from "../scss/header.module.scss";

export default function Header() {
  return (
    <header id={styles.header}>
      <h1>Items</h1>
      <h2>Get to searching.</h2>
    </header>
  );
}
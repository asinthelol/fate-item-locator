import styles from "../scss/header.module.scss";

type HeaderProps = {
  title: string;
  subtitle?: string;
  hFontSize?: string;
};

export default function Header({ title, subtitle, hFontSize }: HeaderProps) {
  return (
    <header id={styles.header}>
      <h1 style={{fontSize: hFontSize ? hFontSize : ""}}>{title}</h1>
      {subtitle ? <h2>{subtitle}</h2> : ""}
    </header>
  );
}
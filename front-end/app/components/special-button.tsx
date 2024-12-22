import styles from "../scss/special-button.module.scss";
import Link from "next/link";

type SpecialButtonProps = {
  text: string;
  ariaLabel: string;
  href: string;
}

export default function SpecialButton({ text, ariaLabel, href }: SpecialButtonProps) {
  return (
    <Link className={styles["special-button"]} aria-label={ariaLabel} href={href}>{text}</Link>
  );
}
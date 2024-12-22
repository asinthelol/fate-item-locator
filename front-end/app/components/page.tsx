// import styles from "./page.module.css";
import type { Metadata } from "next";
import styles from "./scss/page.module.scss";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200"]
});

export const metadata: Metadata = {
  title: "Home | Item Locator",
  description: "A tool to help you find items in Fate/Grand Order.",
};

export default function Page() {

  return (
    <main id={styles.container}>
      <div className={poppins.className} id={styles["hero-text-area"]}>
        <div id={styles["hero-text"]}>
          <h1>Want it, Search it,</h1>
          <h1 id={styles.colored} aria-label="Colored heading">Get it.</h1>
        </div>
        
        <div>
          <h2 className={styles.gray} aria-label="Subheading 1">Find what you need,</h2>
          <h2 className={styles.gray} aria-label="Subheading 2">just like that.</h2>
        </div>
        <Link className="special-button" aria-label="Items button home" href="/items">Start Searching</Link>
      </div>
        <div id={styles["image-area"]} />
    </main>
    
  );
}

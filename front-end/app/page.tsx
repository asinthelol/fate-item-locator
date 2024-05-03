// import styles from "./page.module.css";
import type { Metadata } from "next";
import React from "react";
import styles from "./scss/page.module.scss";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "200"]
});

export const metadata: Metadata = {
  title: "Home | Item Locator",
  description: "A tool to help you find items in Fate/Grand Order.",
};

export default function Home() {

  return (
    <main id={styles["hero"]}>
      <div className={poppins.className} id={styles["hero-text-area"]}>
        <div id={styles["hero-text"]}>
          <h1>Want it, Search it, </h1>
          <h1 id={styles.colored} data-testid="colored">Get it.</h1>
        </div>
        
        <div>
          <p className={styles.gray} data-testid="gray-1">Find what you need,</p>
          <p className={styles.gray} data-testid="gray-2">just like that.</p>
        </div>
        <a className="special-button" data-testid="special-button-2" href="/items">Start Searching</a>
      </div>
      <div id={styles["hero-image"]}>
        <div id={styles["image-area"]} />
      </div>
    </main>
    
  );
}

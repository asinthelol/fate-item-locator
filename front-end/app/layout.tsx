"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.scss";
import styles from "./scss/layout.module.scss";
import Image from "next/image";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [isOpen, setIsOpen] = useState(false); // To check if hamburger menu is open.

  // Function to toggle hamburger menu.
  function toggleMenu() {
    const overlay = document.getElementById(styles.overlay);

    setIsOpen(!isOpen);
    if (isOpen && overlay) {
      overlay.className = styles.closed; // Somehow i messed it up so it has to be the other way around LOL
    } else if(overlay){
      overlay.className = styles.open;
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="64x64" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/favicon.ico" />
        <link rel="preload" as="image" href="/hero/hero-mobile.webp" />
      </head>
      <body className={inter.className}>
        <nav id={styles["navbar-holder"]}>
          <div className={`${styles.overlay} ${isOpen ? styles.open : styles.closed}`}></div> {/* Overlay for the hamburger menu */}
          <ul className={poppins.className} id={styles.navbar}>
            <li className={styles["nav-links"]}>
              <a href="/" aria-label="Home Button" data-testid="home-button">
                <Image id={styles.icon} src="/icons/icon.webp" alt="Home button icon" width={50} height={50} draggable={false}/>
              </a>
            </li>
            <li className={`${styles["nav-links"]} ${isOpen ? styles.open : ""}`}>
              <a className="button" id={styles.upload} data-testid="upload-button" href='#'>Upload</a>
              <a className="button" data-testid="special-button-1" href='/items'>Items</a>
            </li>
          </ul>
          <div id={styles.hamburger} className={isOpen ? styles.open : ""} onClick={toggleMenu}>
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
            <span className={styles["hamburger-line"]}></span>
          </div>
        </nav>
        {children}

        <footer id={styles.footer}>
          <p className={styles["footer-text"]}>&copy; Kevin Tolbert</p>
        </footer>
        </body>
    </html>
  );
}

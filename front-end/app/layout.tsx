"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.scss";
import styles from "./scss/layout.module.scss";
import Image from "next/image";
import Link from "next/link";
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

  // To check if hamburger menu is open.
  // Weirdly enough, the menu is technically open when it is set to false.
  // So if you click on the home button while isOpen is set to false, 
  // it will change its value to true,  meaning closed.
  // So true means closed, false means open.
  const [isOpen, setIsOpen] = useState(false); 

  // Yoggle hamburger menu.
  function toggleMenu() { setIsOpen((prev) => !prev); }

  // Only for the home button on mobile.
  function closeMenuIfOpen() {
    if (!isOpen) toggleMenu();
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="64x64" href="/icons/favicon.ico" />
        <link rel="preload" as="image" href="/hero/hero-mobile.webp" />
      </head>
      <body className={inter.className}>
        <nav id={styles["navbar-holder"]}>

          <div
            className={`${styles.overlay}
              ${isOpen ? styles.open : styles.closed}`}
          /> {/* Overlay for the hamburger menu */}

          <ul className={poppins.className} id={styles.navbar}>

            <li className={styles["nav-links"]} onClick={closeMenuIfOpen}>
              <Link href="/" aria-label="home-button-link" onClick={toggleMenu}>
                <Image
                  id={styles.icon}
                  src="/icons/icon.webp"
                  alt="Home button icon"
                  width={50} height={50}
                  draggable={false}
                />
              </Link>
            </li>

            <li className={`${styles["nav-links"]} ${isOpen ? styles.open : ""}`}>
              <Link className="button" aria-label="upload-button-link" href="#">Upload</Link>
              <Link className="button" aria-label="items-button-link-nav" href="/items" onClick={toggleMenu}>Items</Link>
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

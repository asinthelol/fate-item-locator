"use client";
import { Inter, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
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
  // So if you click on the home button while isNotOpen is set to false, 
  // it will change its value to true,  meaning closed.
  // So true means closed, false means open.
  const [isNotOpen, setisNotOpen] = useState(false); 

  // Toggle hamburger menu.
  function toggleMenu() { setisNotOpen((prev) => !prev); }

  // Only for the home button on mobile.
  function closeMenuIfOpen() {
    if (!isNotOpen) toggleMenu();
  }

  // if there are no children, return notFound.
  if (!children) return notFound();

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
              ${isNotOpen ? styles.open : styles.closed}`}
          /> {/* Overlay for the hamburger menu */}

          <ul className={poppins.className} id={styles.navbar}>

            <li className={styles["nav-links"]} onClick={closeMenuIfOpen}>
              <Link href="/" aria-label="Home button" onClick={toggleMenu}>
                <Image
                  id={styles.icon}
                  src="/icons/icon.webp"
                  alt="Home button icon"
                  width={50} height={50}
                  draggable={false}
                />
              </Link>
            </li>

            <li className={`${styles["nav-links"]} ${isNotOpen ? styles.open : ""}`}>
              <Link className="button" aria-label="Login button" href="/login" onClick={toggleMenu}>Login</Link>
              <Link className="button" aria-label="Items button nav" href="/items" onClick={toggleMenu}>Items</Link>
            </li>

          </ul>

          <div id={styles.hamburger} className={isNotOpen ? styles.open : ""} onClick={toggleMenu} aria-label="Hamburger button">
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

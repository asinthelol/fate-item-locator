"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.scss";
import styles from "./scss/layout.module.scss";

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
  return (
    <html lang="en">
      <head>
        <link rel="icon" sizes="64x64" href="/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/favicon.ico" />
        <link rel="preload" as="image" href="/hero/hero.webp" />
        <link rel="preload" as="image" href="/hero/hero-mobile.webp" />
      </head>
      <body className={inter.className}>
        <nav id={styles["navbar-holder"]}>
          <ul className={poppins.className} id={styles.navbar}>
            <li className={styles["nav-links"]} id={styles["home-li"]} >
              <a href="#" aria-label="Home Button" data-testid="home-button"><img id={styles.icon} src="/icons/icon.webp" alt="Home button icon"/></a>
            </li>
            <li className={styles["nav-links"]}>
              <a className="button" id={styles.upload} data-testid="upload-button" href='#'>Upload</a>
              <a className="special-button" data-testid="special-button-1" href='#'>Items</a>
            </li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}

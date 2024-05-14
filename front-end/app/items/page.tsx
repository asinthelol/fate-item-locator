import { Metadata } from "next";
import styles from "./scss/page.module.scss";
import ItemArea from "./components/item-area";
import FilterArea from "./components/filter-area";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "Items | Item Locator",
  description: "A tool to help you find items in Fate/Grand Order.",
};


export default function Page() {
  return (
    <main id={styles.container}>
      <Header />
      <section id={styles["item-filter-area"]}>
        <ItemArea />
        <FilterArea />
      </section>
      
    </main>
  );
}
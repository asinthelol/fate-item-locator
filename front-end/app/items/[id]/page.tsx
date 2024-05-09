import React from "react";
import { Metadata } from "next";
import styles from "./scss/page.module.scss";
import ItemInfo from "./components/item-info"
import Locations from "./components/locations";

type Parameter = {
 id: number;
}

const items = [
  {
      "id": 1,
      "name": "Scarab of Wisdom",
      "image": "/items/scarab-wisdom.png"
  }
]

type Quests = {
  id: number;
  item_id: number;
  area: string;
  name: string;
  ap: number;
  ap_drop: number;
  bp_ap: number;
  chance: number;
  link: string;
};

const quests: Quests[] = [
  {
      "id": 1,
      "item_id": 1,
      "area": "Gotterdammerung",
      "name": "Berserker Training Ground - Expert",
      "ap": 20,
      "ap_drop": 5,
      "bp_ap": 3,
      "chance": 0.1,
      "link": "https://fategrandorder.fandom.com/wiki/Free_Quests:_G%C3%B6tterd%C3%A4mmerung#Flaming_Mansion"
  },
  {
    "id": 2,
    "item_id": 1,
    "area": "Gotterdammerung",
    "name": "Ancient Ruins",
    "ap": 20,
    "ap_drop": 5,
    "bp_ap": 3,
    "chance": 0.1,
    "link": "https://fategrandorder.fandom.com/wiki/Free_Quests:_G%C3%B6tterd%C3%A4mmerung#Flaming_Mansion"
  },
  {
    "id": 2,
    "item_id": 1,
    "area": "Gotterdammerung",
    "name": "Ancient Ruins",
    "ap": 20,
    "ap_drop": 5,
    "bp_ap": 3,
    "chance": 0.1,
    "link": "https://fategrandorder.fandom.com/wiki/Free_Quests:_G%C3%B6tterd%C3%A4mmerung#Flaming_Mansion"
  },
  {
    "id": 2,
    "item_id": 1,
    "area": "Gotterdammerung",
    "name": "Ancient Ruins",
    "ap": 20,
    "ap_drop": 5,
    "bp_ap": 3,
    "chance": 0.1,
    "link": "https://fategrandorder.fandom.com/wiki/Free_Quests:_G%C3%B6tterd%C3%A4mmerung#Flaming_Mansion"
  },
]

export const metadata: Metadata = {
  title: `${items[0].name} | Item Locator`, // Temporary.
  description: `All locations for ${items[0].name}.`,
};

export default function Page( {params} : {params: Parameter}) {

  return (
    <main id={styles.container}>
      <ItemInfo items={items} params={params} />
      <Locations quests={quests} items={items} params={params} />
    </main>
  );
}
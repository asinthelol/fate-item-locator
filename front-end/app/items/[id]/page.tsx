import { Metadata } from "next"
import styles from "./scss/page.module.scss";

import Header from "@/app/components/header";
import ItemImage from "./components/item-image"
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

export async function generateMetadata({ params }: { params: Parameter }): Promise<Metadata> {
  // const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  // const items = await response.json();
  // const quests = await response.json();

  const item = items.find(item => item.id === Number(params.id));

  if(!item) {
    return {
      title: "Not Found",
      description: "Item not found",
    };
  }
  else {
    return {
      title: item.name,
      description: "Item information",
    };
  
  }
}

export default function Page( {params} : {params: Parameter}) {
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  //     .then(response => response.json())
  //     .then(data => setItem(data));
  // }, [params.id]);
  // I can either make it two calls to different endpoints, or have a table with the items and quests in the same endpoint.
  const item = items.find(item => item.id === Number(params.id));

  return (
    <>
      <main id={styles.container}>
        <Header title={item ? item.name : "Item not found."} subtitle={item ? "Where to find it." : ""} />
        <ItemImage items={items} params={params} />
        <Locations quests={quests} items={items} params={params} />
      </main>
    </>
    
  );
}
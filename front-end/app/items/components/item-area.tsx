import React from "react";
import styles from "../scss/item-area.module.scss";
import Item from "./item";

const itemData = [ // Test item data before implementing backend.
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
  { name: "Arrowhead of Malice", imgSrc: "/items/arrowhead-malice.png", alt: "arrowhead-malice" },
];

export default function ItemArea() {
  return (
    <div id={styles["item-area"]}>
      {itemData.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          imgSrc={item.imgSrc}
          alt={item.alt}
        />
      ))}
    </div>
  );
}
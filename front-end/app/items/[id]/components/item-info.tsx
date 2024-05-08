import React from "react";
import styles from "../scss/item-info.module.scss";

type Parameter = {
  id: number;
}

type Items = {
  id: number;
  name: string;
  image: string;
}

type ItemProps = {
  params: Parameter;
  items: Items[];
}

export default function ItemInfo({ params, items }: ItemProps) {

  const item = items.find(item => item.id == (params.id));

    return (
        <section id={styles["item-info-area"]}>
          <div id={styles["text-area"]}>
            <h1 id={styles["item-name"]}>{item?.name}</h1>
            <p id={styles["sub-heading"]}>Where to find it.</p>
          </div>
          
          <div id={styles["image-area"]}>
            <img src={item?.image} alt={item?.name} />
          </div>
          
        </section>
    );
}
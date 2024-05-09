import React from "react";
import Image from "next/image";
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
          <h2 id={styles["sub-heading"]}>Where to find it.</h2>
        </div>
        
        <div id={styles["image-area"]}>
          <Image src={item?.image ?? ''} alt={item?.name ?? ''} width={80} height={80}/>
        </div>
        
      </section>
  );
}
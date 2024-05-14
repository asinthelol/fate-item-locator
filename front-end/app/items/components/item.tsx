import styles from "../scss/item-area.module.scss";
import Image from "next/image";

export default function Item({ name, imgSrc, alt }: { name: string, imgSrc: string, alt: string }) {
  return (
    <div className={styles.item}>
    <div className={styles["image-holder"]}>
      <Image
        className={styles["item-image"]}
        src={imgSrc}
        alt={alt}
        width={80}
        height={80}
        draggable={false}
      />
    </div>
    <div className={styles["text-holder"]}>
      <p>{name}</p>
    </div>
  </div>
  )
}
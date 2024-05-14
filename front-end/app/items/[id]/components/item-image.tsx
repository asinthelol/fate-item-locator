import Image from "next/image";
import styles from "../scss/item-image.module.scss";

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

export default function ItemImage({ params, items }: ItemProps) {

  const item = items.find(item => item.id == (params.id));

  if(!item) { return "No item found"; }

  return (        
    <section id={styles["image-area"]}>
      <Image src={item?.image ?? ''} alt={item?.name ?? ''} width={80} height={80}/>
    </section>
  );
}
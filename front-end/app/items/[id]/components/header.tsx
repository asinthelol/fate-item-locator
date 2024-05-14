import styles from "../scss/header.module.scss";

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

export default function Header({ params, items }: ItemProps) {

  const item = items.find(item => item.id == (params.id));

  if(!item) { return "No item found"; }

  return (
    <header id={styles.header}>
      <h1 id={styles["item-name"]}>{item?.name}</h1>
      <h2 id={styles["sub-heading"]}>Where to find it.</h2>
    </header>
  );
}
import styles from "../scss/locations.module.scss";

type Parameter = {
  id: number;
}

type Items = {
  id: number;
}

type Quests = {
  id: number;
  item_id: number; // This will give a warning in the console (two children with same key) because the id is repeated in the second object
  area: string;
  name: string;
  ap: number;
  ap_drop: number;
  bp_ap: number;
  chance: number;
}

type LocationProps = {
  params: Parameter;
  items: Items[];
  quests: Quests[];
}

export default function Locations({ params, items, quests }: LocationProps) {

  const item = items.find(item => item.id == (params.id));
  const matchingQuests = quests.filter(quest => quest.item_id == (params.id));

  if (!item || !matchingQuests.length) { return ""; }

  return (
    <section id={styles["locations-area"]}>
      <table id={styles.table}>
        <thead>
          <tr id={styles["table-keys-holder"]}>
            {["Area", "Quest", "Ap", "AP/Drop", "BP/AP", "Chance"].map((key) => ( // The columns of the table
              <th key={key} className={styles["table-key"]}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
        {matchingQuests.map((quest) => (
          <tr key={quest.id} className={styles["table-values-holder"]}>
            <td className={styles["table-value"]}>{quest.area}</td>
            <td className={styles["table-value"]}>{quest?.name}</td>
            <td className={styles["table-value"]}>{quest.ap}</td>
            <td className={styles["table-value"]}>{quest.ap_drop}</td>
            <td className={styles["table-value"]}>{quest.bp_ap}</td>
            <td className={styles["table-value"]}>{quest.chance}%</td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );

}
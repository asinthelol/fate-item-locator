import React from "react";
import styles from "../scss/locations.module.scss";

type Parameter = {
  id: number;
}

type Items = {
  id: number;
}

type Quests = {
  id: number;
  item_id: number;
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

  const tableKeys = ["Area", "Quest", "Ap", "AP/Drop", "BP/AP", "Chance"];

  if (!item || !matchingQuests.length) {
    return <div>No quests found with item ID {params.id}</div>;
  }

  return (
    <table id={styles.table}>
      <thead>
        <tr id={styles["table-keys-holder"]}>
          {tableKeys.map((key) => (
            <th key={key} className={styles["table-key"]}>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody>
      {matchingQuests.map((quest) => (
          <tr key={quest.id} className={styles["table-values-holder"]}>
            <td className={styles["table-value"]}>{quest.area}</td>
            <td className={styles["table-value"]}>{quest.name}</td>
            <td className={styles["table-value"]}>{quest.ap}</td>
            <td className={styles["table-value"]}>{quest.ap_drop}</td>
            <td className={styles["table-value"]}>{quest.bp_ap}</td>
            <td className={styles["table-value"]}>{quest.chance}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}
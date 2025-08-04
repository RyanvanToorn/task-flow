import type { TableProps } from "./Table.types";
import styles from "./Table.module.css";

export const Table: React.FC<TableProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

import type { TableProps } from "./Table.types";
import styles from "./Table.module.css";
import MUITable from "@mui/material/Table";

export const Table: React.FC<TableProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

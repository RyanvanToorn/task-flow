import type { TableProps } from "./Table.types";
import styles from "./Table.module.css";
import MUITable from "@mui/material/Table";

export const Table: React.FC<TableProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUITable className={`${styles.table} ${extendedClass}`}>{temp}</MUITable>;
};

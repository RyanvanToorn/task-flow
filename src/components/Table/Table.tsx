import type { TableProps } from "./Table.types";
import styles from "./Table.module.css";
import MUITable from "@mui/material/Table";

export const Table: React.FC<TableProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUITable className={`${styles.table} ${extendedClass}`} style={inlineStyles}></MUITable>;
};

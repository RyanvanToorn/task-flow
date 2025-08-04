import type { ListProps } from "./List.types";
import styles from "./List.module.css";
import MUIList from "@mui/material/List";

export const List: React.FC<ListProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIList className={`${styles.list} ${extendedClass}`}>{temp}</MUIList>;
};

import type { ListProps } from "./List.types";
import styles from "./List.module.css";
import MUIList from "@mui/material/List";

export const List: React.FC<ListProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

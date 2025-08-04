import type { AppBarProps } from "./AppBar.types";
import styles from "./AppBar.module.css";
import MUIAppBar from "@mui/material/AppBar";

export const AppBar: React.FC<AppBarProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIAppBar className={`${styles.appBar} ${extendedClass}`}>{temp}</MUIAppBar>;
};

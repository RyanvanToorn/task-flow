import type { MenuProps } from "./Menu.types";
import styles from "./Menu.module.css";
import MUIMenu from "@mui/material/Menu";

export const Menu: React.FC<MenuProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

import type { MenuProps } from "./Menu.types";
import styles from "./Menu.module.css";
import MUIMenu from "@mui/material/Menu";

export const Menu: React.FC<MenuProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIMenu className={`${styles.menu} ${extendedClass}`}>{temp}</MUIMenu>;
};

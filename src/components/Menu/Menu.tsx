import type { MenuProps } from "./Menu.types";
import styles from "./Menu.module.css";
import MUIMenu from "@mui/material/Menu";

export const Menu: React.FC<MenuProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIMenu className={`${styles.menu} ${extendedClass}`} style={inlineStyles}></MUIMenu>;
};

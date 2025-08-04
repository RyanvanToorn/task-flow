import type { BottomNavigationProps } from "./BottomNavigation.types";
import styles from "./BottomNavigation.module.css";
import MUIBottomNavigation from "@mui/material/BottomNavigation";

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIBottomNavigation className={`${styles.bottomNavigation} ${extendedClass}`} style={inlineStyles}></MUIBottomNavigation>;
};

import type { BottomNavigationProps } from "./BottomNavigation.types";
import styles from "./BottomNavigation.module.css";
import MUIBottomNavigation from "@mui/material/BottomNavigation";

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIBottomNavigation className={`${styles.bottomNavigation} ${extendedClass}`}>{temp}</MUIBottomNavigation>;
};

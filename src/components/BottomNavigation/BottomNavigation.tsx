import type { BottomNavigationProps } from "./BottomNavigation.types";
import styles from "./BottomNavigation.module.css";

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

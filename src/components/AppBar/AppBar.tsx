import type { AppBarProps } from "./AppBar.types";
import styles from "./AppBar.module.css";

export const AppBar: React.FC<AppBarProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

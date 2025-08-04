import type { ProgressProps } from "./Progress.types";
import styles from "./Progress.module.css";

export const Progress: React.FC<ProgressProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

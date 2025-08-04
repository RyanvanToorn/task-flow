import type { AlertProps } from "./Alert.types";
import styles from "./Alert.module.css";

export const Alert: React.FC<AlertProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

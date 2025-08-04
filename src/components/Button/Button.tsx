import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

export const Button: React.FC<ButtonProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

import type { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";

export const TextField: React.FC<TextFieldProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

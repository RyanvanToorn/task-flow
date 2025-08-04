import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import MUIButton from "@mui/material/Button";

export const Button: React.FC<ButtonProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

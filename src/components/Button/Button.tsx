import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import MUIButton from "@mui/material/Button";

export const Button: React.FC<ButtonProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIButton className={`${styles.button} ${extendedClass}`}>{temp}</MUIButton>;
};

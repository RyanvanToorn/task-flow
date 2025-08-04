import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import MUIButton from "@mui/material/Button";

export const Button: React.FC<ButtonProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIButton className={`${styles.button} ${extendedClass}`} style={inlineStyles}></MUIButton>;
};

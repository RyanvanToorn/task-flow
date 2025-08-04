import type { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";
import MUITextField from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUITextField className={`${styles.textField} ${extendedClass}`} style={inlineStyles}></MUITextField>;
};

import type { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";
import MUITextField from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUITextField className={`${styles.textField} ${extendedClass}`}>{temp}</MUITextField>;
};

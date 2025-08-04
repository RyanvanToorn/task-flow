import type { TextFieldProps } from "./TextField.types";
import styles from "./TextField.module.css";
import MUITextField from "@mui/material/TextField";

export const TextField: React.FC<TextFieldProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

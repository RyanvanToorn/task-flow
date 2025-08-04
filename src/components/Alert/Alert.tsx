import type { AlertProps } from "./Alert.types";
import styles from "./Alert.module.css";
import MUIAlert from "@mui/material/Alert";

export const Alert: React.FC<AlertProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIAlert severity="info" className={`${styles.alert} ${extendedClass}`} style={inlineStyles}></MUIAlert>;
};

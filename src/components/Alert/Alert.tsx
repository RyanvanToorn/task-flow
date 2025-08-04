import type { AlertProps } from "./Alert.types";
import styles from "./Alert.module.css";
import MUIAlert from "@mui/material/Alert";

export const Alert: React.FC<AlertProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return (
    <MUIAlert severity="info" className={`${styles.alert} ${extendedClass}`}>
      {temp}
    </MUIAlert>
  );
};

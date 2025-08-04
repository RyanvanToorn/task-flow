import type { ToggleButtonProps } from "./ToggleButton.types";
import styles from "./ToggleButton.module.css";
import MUIToggleButton from "@mui/material/ToggleButton";

export const ToggleButton: React.FC<ToggleButtonProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

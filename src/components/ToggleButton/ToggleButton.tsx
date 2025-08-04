import type { ToggleButtonProps } from "./ToggleButton.types";
import styles from "./ToggleButton.module.css";
import MUIToggleButton from "@mui/material/ToggleButton";

export const ToggleButton: React.FC<ToggleButtonProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIToggleButton className={`${styles.toggleButton} ${extendedClass}`}>{temp}</MUIToggleButton>;
};

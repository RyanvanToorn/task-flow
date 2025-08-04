import type { ToggleButtonProps } from "./ToggleButton.types";
import styles from "./ToggleButton.module.css";
import MUIToggleButton from "@mui/material/ToggleButton";

export const ToggleButton: React.FC<ToggleButtonProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIToggleButton className={`${styles.toggleButton} ${extendedClass}`} style={inlineStyles}></MUIToggleButton>;
};

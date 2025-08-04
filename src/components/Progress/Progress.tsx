import type { ProgressProps } from "./Progress.types";
import styles from "./Progress.module.css";
import MUIProgress from "@mui/material/LinearProgress";

export const Progress: React.FC<ProgressProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIProgress className={`${styles.progress} ${extendedClass}`} style={inlineStyles}></MUIProgress>;
};

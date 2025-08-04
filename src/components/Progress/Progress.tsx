import type { ProgressProps } from "./Progress.types";
import styles from "./Progress.module.css";
import MUIProgress from "@mui/material/LinearProgress";

export const Progress: React.FC<ProgressProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIProgress className={`${styles.progress} ${extendedClass}`}>{temp}</MUIProgress>;
};

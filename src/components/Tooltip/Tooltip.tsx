import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";
import MUITooltip from "@mui/material/Tooltip";

export const Tooltip: React.FC<TooltipProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

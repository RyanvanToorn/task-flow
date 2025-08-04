import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";
import MUITooltip from "@mui/material/Tooltip";

export const Tooltip: React.FC<TooltipProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUITooltip className={`${styles.tooltip} ${extendedClass}`}>{temp}</MUITooltip>;
};

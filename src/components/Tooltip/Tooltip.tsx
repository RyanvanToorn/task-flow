import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";
import MUITooltip from "@mui/material/Tooltip";

export const Tooltip: React.FC<TooltipProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUITooltip className={`${styles.tooltip} ${extendedClass}`} style={inlineStyles}></MUITooltip>;
};

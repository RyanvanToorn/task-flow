import type { TooltipProps } from "./Tooltip.types";
import styles from "./Tooltip.module.css";
import MUITooltip from "@mui/material/Tooltip";

export const Tooltip: React.FC<TooltipProps> = ({ title = "", children = <div></div>, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return (
    <MUITooltip title={title} className={`${styles.tooltip} ${extendedClass}`} style={inlineStyles}>
      {children}
    </MUITooltip>
  );
};

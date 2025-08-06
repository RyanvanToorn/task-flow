import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { TooltipProps as MUITooltipProps } from "@mui/material/Tooltip";

export interface TooltipProps extends BaseComponentProps, MUITooltipProps {
  temp?: string;
}

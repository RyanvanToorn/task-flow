import type { BaseComponentProps } from "shared/StandardProps";
import type { TooltipProps as MUITooltipProps } from "@mui/material/Tooltip";

export interface TooltipProps extends BaseComponentProps, MUITooltipProps {
  temp?: string;
}

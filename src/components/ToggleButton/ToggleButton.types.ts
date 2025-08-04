import type { BaseComponentProps } from "shared/StandardProps";
import type { ToggleButtonProps as MUIToggleButtonProps } from "@mui/material/ToggleButton";

export interface ToggleButtonProps extends BaseComponentProps, MUIToggleButtonProps {
  temp?: string;
}

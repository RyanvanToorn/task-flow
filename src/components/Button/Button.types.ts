import type { BaseComponentProps } from "shared/StandardProps";
import type { ButtonProps as MUIButtonProps } from "@mui/material/Button";

export interface ButtonProps extends BaseComponentProps, MUIButtonProps {
  temp: string;
}

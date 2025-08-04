import type { BaseComponentProps } from "shared/StandardProps";
import type { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";

export interface AppBarProps extends BaseComponentProps, MUIAppBarProps {
  temp?: string;
}

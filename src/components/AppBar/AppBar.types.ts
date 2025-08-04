import type { BaseComponentProps } from "shared/StandardProps";
import type { AppBarProps as MUIAppBarProps } from "@mui/material/AppBar";
import type { ReactElement } from "react";

export interface AppBarProps extends BaseComponentProps, MUIAppBarProps {
  children: ReactElement;
  temp?: string;
}

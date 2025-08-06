import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { MenuProps as MUIMenuProps } from "@mui/material/Menu";

export interface MenuProps extends BaseComponentProps, MUIMenuProps {
  temp?: string;
}

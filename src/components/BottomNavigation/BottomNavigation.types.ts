import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { BottomNavigationProps as MUIBottomNavigationProps } from "@mui/material/BottomNavigation";

export interface BottomNavigationProps extends BaseComponentProps, MUIBottomNavigationProps {
  temp?: string;
}

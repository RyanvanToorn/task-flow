import type { BaseComponentProps } from "shared/StandardProps";
import type { CardProps as MUICardProps } from "@mui/material/Card";

export interface CardProps extends BaseComponentProps, MUICardProps {
  temp: string;
}

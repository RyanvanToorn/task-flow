import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { ListProps as MUIListProps } from "@mui/material/List";

export interface ListProps extends BaseComponentProps, MUIListProps {
  temp?: string;
}

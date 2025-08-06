import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { TableProps as MUITableProps } from "@mui/material/Table";

export interface TableProps extends BaseComponentProps, MUITableProps {
  temp?: string;
}

import type { BaseComponentProps } from "shared/StandardProps";
import type { PaginationProps as MUIPaginationProps } from "@mui/material/Pagination";

export interface PaginationProps extends BaseComponentProps, MUIPaginationProps {
  temp: string;
}

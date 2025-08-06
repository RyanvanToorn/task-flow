import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { LinearProgressProps as MUILinearProgressProps } from "@mui/material/LinearProgress";

export interface ProgressProps extends BaseComponentProps, MUILinearProgressProps {
  temp?: string;
}

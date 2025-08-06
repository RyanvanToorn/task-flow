import type { BaseComponentProps } from "@shared/interfaces/StandardProps";
import type { AlertProps as MUIAlertProps } from "@mui/material/Alert";

export interface AlertProps extends BaseComponentProps, MUIAlertProps {
  temp?: string;
}

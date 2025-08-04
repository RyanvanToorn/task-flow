import type { BaseComponentProps } from "shared/StandardProps";
import type { TextFieldProps as MUITextFieldProps } from "@mui/material/TextField";

export interface TextFieldProps extends BaseComponentProps, MUITextFieldProps {
  temp: string;
}

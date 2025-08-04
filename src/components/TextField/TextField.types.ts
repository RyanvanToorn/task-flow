import type { BaseComponentProps } from "shared/StandardProps";
import type { OutlinedTextFieldProps as MUITextFieldProps } from "@mui/material/TextField";

export interface TextFieldProps extends BaseComponentProps, MUITextFieldProps {
  temp?: string;
}

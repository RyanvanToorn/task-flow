import type { BaseComponentProps } from "shared/StandardProps";
import type { OutlinedTextFieldProps, StandardTextFieldProps, FilledTextFieldProps } from "@mui/material/TextField";

type MUITextFieldProps = OutlinedTextFieldProps | StandardTextFieldProps | FilledTextFieldProps;

export type TextFieldProps = BaseComponentProps &
  MUITextFieldProps & {
    temp?: string;
  };

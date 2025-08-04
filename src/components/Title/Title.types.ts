import type { BaseComponentProps } from "shared/StandardProps";

export interface TitleProps extends BaseComponentProps {
  title?: string;
  size?: "s" | "m" | "l";
}

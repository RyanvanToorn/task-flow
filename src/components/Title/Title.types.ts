import type { BaseComponentProps } from "@shared/interfaces/StandardProps";

export interface TitleProps extends BaseComponentProps {
  title: string;
  size?: "s" | "m" | "l";
}

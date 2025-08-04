import type { AppBarProps } from "./AppBar.types";
import styles from "./AppBar.module.css";
import MUIAppBar from "@mui/material/AppBar";

export const AppBar: React.FC<AppBarProps> = ({ children = <div></div>, isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return (
    <MUIAppBar className={`${styles.appBar} ${extendedClass}`} style={inlineStyles}>
      {children}
    </MUIAppBar>
  );
};

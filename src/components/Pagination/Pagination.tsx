import type { PaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.css";
import MUIPagination from "@mui/material/Pagination";

export const Pagination: React.FC<PaginationProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUIPagination className={`${styles.pagination} ${extendedClass}`} style={inlineStyles}></MUIPagination>;
};

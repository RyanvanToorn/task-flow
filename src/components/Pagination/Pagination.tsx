import type { PaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.css";
import MUIPagination from "@mui/material/Pagination";

export const Pagination: React.FC<PaginationProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUIPagination className={`${styles.pagination} ${extendedClass}`}>{temp}</MUIPagination>;
};

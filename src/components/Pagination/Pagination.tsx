import type { PaginationProps } from "./Pagination.types";
import styles from "./Pagination.module.css";

export const Pagination: React.FC<PaginationProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

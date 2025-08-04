import type { ListProps } from "./List.types";
import styles from "./List.module.css";

export const List: React.FC<ListProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

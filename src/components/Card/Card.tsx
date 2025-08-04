import type { CardProps } from "./Card.types";
import styles from "./Card.module.css";
import MUICard from "@mui/material/Card";

export const Card: React.FC<CardProps> = ({ temp = "Default alert message", extendedClass = "" }) => {
  return <div className={`${styles.alert} ${extendedClass}`}>{temp}</div>;
};

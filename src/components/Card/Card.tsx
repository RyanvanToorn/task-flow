import type { CardProps } from "./Card.types";
import styles from "./Card.module.css";
import MUICard from "@mui/material/Card";

export const Card: React.FC<CardProps> = ({ temp = "", extendedClass = "" }) => {
  return <MUICard className={`${styles.card} ${extendedClass}`}>{temp}</MUICard>;
};

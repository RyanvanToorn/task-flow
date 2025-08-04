import type { CardProps } from "./Card.types";
import styles from "./Card.module.css";
import MUICard from "@mui/material/Card";

export const Card: React.FC<CardProps> = ({ isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  return <MUICard className={`${styles.card} ${extendedClass}`} style={inlineStyles}></MUICard>;
};

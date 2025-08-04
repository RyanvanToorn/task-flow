import type { TitleProps } from "./Title.types";
import styles from "./Title.module.css";

export const Title: React.FC<TitleProps> = ({ title = "Title-Text", size = "m", isVisible = true, extendedClass = "", inlineStyles = {} }) => {
  if (!isVisible) return;

  const derivedClass = size === "s" ? styles.titleSmall : size === "m" ? styles.titleMedium : size === "l" ? styles.titleLarge : "";

  return (
    <div className={`${styles.titleWrapper}`}>
      <div className={`${styles.title} ${derivedClass} ${extendedClass}`} style={inlineStyles}>
        {title}
      </div>
    </div>
  );
};

import styles from "./ExpandableList.module.css";
import { ChevronDown } from "lucide-react";

const ExpandableList = ({ title, description, isOpen, onToggle }) => {
  return (
    <section className={styles.accordion}>
      <article
        className={`${styles.accordionItem} ${isOpen ? styles.open : ""}`}
      >
        <button
          className={styles.accordionHeader}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span>
            <h3>{title}</h3>
          </span>
          <span className={styles.arrow}>
            <ChevronDown />
          </span>
        </button>

        <div
          className={`${styles.description} ${isOpen ? styles.show : ""}`}
          aria-hidden={!isOpen}
        >
          <div className={styles.box}>{description}</div>
        </div>
      </article>
    </section>
  );
};

export default ExpandableList;

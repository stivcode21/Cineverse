import { useState } from "react";
import styles from "./ExpandableList.module.css";
import { ChevronDown } from "lucide-react";

const ExpandableList = ({ title, description, index }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className={styles.accordion}>
      <article
        className={`${styles.accordionItem} ${
          openItem === index ? styles.open : ""
        }`}
      >
        <button
          className={styles.accordionHeader}
          onClick={() => handleAccordion(index)}
          aria-expanded={openItem === index}
        >
          <span>
            <h3>{title}</h3>
          </span>
          <span className={styles.arrow}>
            <ChevronDown />
          </span>
        </button>

        <div
          className={`${styles.description} ${
            openItem === index ? styles.show : ""
          }`}
          aria-hidden={openItem !== index}
        >
          <div className={styles.box}>{description}</div>
        </div>
      </article>
    </section>
  );
};

export default ExpandableList;

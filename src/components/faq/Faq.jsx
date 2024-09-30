import Accordion from "../shared/Accordion/Accordion";
import {faq} from "./constants.js";
import styles from "./Faq.module.css";

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.text_container}>
        <h2 className="bold-xl">
          Питання та <br/>відповіді
        </h2>
        <p>
          Ось кілька типових запитань, які я отримую про свою терапію.
        </p>
      </div>
      <div className={styles.accordion_container}>
        <Accordion items={faq} />
      </div>
    </section>
  )
}

export default Faq;

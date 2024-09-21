import daughter from "../../assets/images/daughter.jpg";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <section className={styles.content}>
      <h2 className="bold-xl">
        Ліцензований терапевт у Києві
      </h2>
      <div className={styles.articles}>
        <div className={styles.article}>
          <div className={`${styles.text_container} ${styles.right}`}>
            <h3 className="bold-l">
              Я ніколи <span>не вважала</span> це своєю місією
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis vel
              est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam interdum
              lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis pretium
              quam non bibendum congue. Suspendisse a felis dolor.
            </p>
          </div>
          <img src={daughter} alt="test"/>
        </div>
        <div className={styles.article}>
          <img src={daughter} alt="test"/>
          <div className={`${styles.text_container} ${styles.left}`}>
            <h3 className="bold-l">
              Я розумію, <span>що</span> я можу
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis vel
              est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam interdum
              lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis pretium
              quam non bibendum congue. Suspendisse a felis dolor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content;

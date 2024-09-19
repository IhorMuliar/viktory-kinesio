import React from 'react'

import child from "../../assets/images/child.jpg";
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
          <div className={`${styles.text_container} ${styles.right} `}>
            <h3 className="bold-l">
              Я ніколи не вважала це своєю місією
            </h3>
            <p>
              Але я зрозуміла, що хочу допомогати людям ще у 5 років. Коли ще була маленькою, то допомогла бабусі
              вирішити проблему з коліном. В той момент це була гра для мене.
            </p>
          </div>
          <img src={child} alt="test image"/>
        </div>
        <div className={styles.article}>
          <img src={daughter} alt="test image"/>
          <div className={`${styles.text_container} ${styles.left} `}>
            <h3 className="bold-l">
              Я розумію, що я можу.
            </h3>
            <p>
              Людина - це набір однакових нот, а я їми граю. Але в моїх руках це завжди інша та індивідуальна симфонія.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content;

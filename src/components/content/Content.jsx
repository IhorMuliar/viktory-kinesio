import daughter from "../../assets/images/daughter.jpg";
import AnimatedOnScroll from "../shared/AnimatedOnScroll.jsx";
import styles from "./Content.module.css";
import {content} from "./constants.js";

const Content = () => {
  return (
    <section className={styles.content} id="content">
      <h2>
        <span>Ліцензований терапевт</span> у Києві
      </h2>
      <div className={styles.articles}>
        {
          content.map((article, index) => (
            <div className={styles.article} key={index}>
              {index % 2 === 0
                ? <>
                  <div className={`${styles.text_container} ${styles.right}`}>
                    <h3 className="bold-l">
                      {/*Я ніколи <span>не вважала</span> це своєю місією*/}
                      {article.title}
                    </h3>
                    <p>
                      {article.description}
                    </p>
                  </div>
                  <AnimatedOnScroll>
                    <img src={daughter} alt="test"/>
                  </AnimatedOnScroll>
                </>
                : <>
                  <AnimatedOnScroll>
                    <img src={daughter} alt="test"/>
                  </AnimatedOnScroll>
                  <div className={`${styles.text_container} ${styles.left}`}>
                    <h3 className="bold-l">
                      {/*Я ніколи <span>не вважала</span> це своєю місією*/}
                      {article.title}
                    </h3>
                    <p>
                      {article.description}
                    </p>
                  </div>
                </>
              }
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Content;

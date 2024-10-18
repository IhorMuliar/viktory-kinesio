import {useEffect, useRef, useState} from "react";
import {motion} from 'framer-motion';

import daughter from "../../assets/images/daughter.jpg";
import styles from "./Content.module.css";
import {content} from "./constants.js";

const Content = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const blockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {threshold: 0.1}
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.content} id="content" ref={blockRef}>
      <motion.h2
        initial={{opacity: 0, translateY: '300%'}}
        animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '300%'}}
        transition={{duration: 0.6}}
      >
        <span>Ліцензований терапевт</span> у Києві
      </motion.h2>
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
                  <img src={daughter} alt="test"/>
                </>
                : <>
                  <img src={daughter} alt="test"/>
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

import {motion, useScroll, useTransform} from "framer-motion";
import {useEffect, useRef, useState} from "react";

import icon from "../../assets/images/test-icon.svg";
import styles from "./Services.module.css";
import {services} from "./constants.js";

const Services = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-88%"]);
  // const xBar = useTransform(scrollYProgress, [0, 1], ["-88%", "1%"]);

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

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.services} id="services" ref={targetRef}>
      <motion.h2
        initial={{opacity: 0, translateY: '300%'}}
        animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '300%'}}
        transition={{duration: 0.6}}
      >
        <span>Терапевтичні</span> послуги
      </motion.h2>
      <div className={styles.container}>
      <motion.ul style={{x}}>
          {services.map((service, index) => (
            <li key={index}>
              <div className={styles.icon}>
                <img src={icon} alt="service icon"/>
              </div>
              <h3 className="bold-m">{service.title}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </motion.ul>
        {/*<div className={styles.progress}>*/}
        {/*  <motion.div style={{x: xBar}} className={styles.bar} />*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default Services;

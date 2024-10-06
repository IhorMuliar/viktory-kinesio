import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

import icon from "../../assets/images/test-icon.svg";
import styles from "./Services.module.css";
import {services} from "./constants.js";

const Services = () => {
  const targetRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-88%"]);
  const xBar = useTransform(scrollYProgress, [0, 1], ["-88%", "1%"]);

  return (
    <section className={styles.services} id="services" ref={targetRef}>
      <h2 className="bold-xl">Терапевтичні послуги</h2>
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

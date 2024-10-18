import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

import styles from "./process.module.css";
import liquid from "../../assets/images/liquid.mp4";
import image from "../../assets/images/hero-portrait.jpg";
import {processes} from "./constants.js";

const Process = () => {
  const variants = {
    visible: i => ({
      opacity: 1,
      translateY: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
      },
    }),
    hidden: {
      opacity: 0,
      translateY: '300%',
    },
  }

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
    <section className={styles.process} id="process" ref={blockRef}>
      <motion.h2
        initial={{opacity: 0, translateY: '300%'}}
        animate={hasAnimated ? {opacity: 1, translateY: '-100px'} : {opacity: 0, translateY: '300%'}}
        transition={{duration: 0.6}}
      >
        <span>Як проходить</span> сеанс
      </motion.h2>
      <div className={styles.video}>
        <video src={liquid} autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto"/>
      </div>
      <div className={styles.container}>
        <img
          src={image}
          alt="test image"
          // initial={{scale: 0.2}}
          // animate={hasAnimated ? {scale: 1} : {scale: 0.2}}
          // transition={{duration: 2}}
        />
        <ul>
          {processes.map((process, i) => (
            <li key={process.index}>
              <p className={styles.index}>/{process.index}</p>
              <div className={styles.wrapper}>
                <motion.p
                  className={styles.title}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  {process.title}
                </motion.p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Process;
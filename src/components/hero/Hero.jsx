import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

import image from "../../assets/images/horizontal-test.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
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
    <section className={styles.hero} ref={blockRef}>
      <motion.h1
        initial={{opacity: 0, translateY: '200%'}}
        animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '200%'}}
        transition={{duration: 0.6, delay: 0.1}}
      >
        <span>Привіт</span>, я Вікторія.
      </motion.h1>
      <div className={styles.intro}>
        <motion.img
          src={image}
          alt="portrait image"
          initial={{opacity: 0, translateY: '50%'}}
          animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '50%'}}
          transition={{duration: 0.6, delay: 0.2}}
        />
        <div className={styles.text_container}>
          <motion.p
            initial={{opacity: 0, translateY: '100%'}}
            animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '100%'}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            Фізичний терапевт за базовою вищою освітою. Та за 20 років своєї практики, я постійно додаю нові ключики в
            скарбничку.
          </motion.p>
          <motion.p
            className={styles.speciality}
            initial={{opacity: 0, translateY: '100%'}}
            animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '100%'}}
            transition={{duration: 0.6, delay: 0.35}}
          >
            Кінезіотерапія,
            прикладна кінезіологія,
            енергокінезіологія,
            психокінезіолонія,
            інтегративна кінезіологія,
            китайська медицина,
            остеопатія,
            цілительсво,
            тонкопланові техніки
            та дар від народження.
          </motion.p>
          <motion.p
            initial={{opacity: 0, translateY: '100%'}}
            animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '100%'}}
            transition={{duration: 0.6, delay: 0.4}}
          >
            Все це поєдную та використовую індивідуально до особливостей та потреб Клієнта. Тому не можливо наперед
            сказати як це. Можу обіцяти лише одне:
            Це буде цікаво, з посмішкою та бережністю до Тебе.
            Адже Я знаю як Твоє тіло запитати що є причиною скарг, та як перекласти його відповідь зрозуміло Твоєму
            мозку
            Тому приходь та знайомся із собою та своїм тілом.
          </motion.p>
        </div>
      </div>
      <motion.button
        className="circle size-l"
        initial={{opacity: 0, translateY: '100%'}}
        animate={hasAnimated ? {opacity: 1, translateY: 0} : {opacity: 0, translateY: '100%'}}
        transition={{duration: 0.6, delay: 0.45}}
      >
        <div className="background"></div>
        <span className="text">Запис на косультацію</span>
      </motion.button>
    </section>
  )
}

export default Hero;
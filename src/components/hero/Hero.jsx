import image from "../../assets/images/hero-portrait.jpg";
import AnimatedOnScroll from "../shared/AnimatedOnScroll.jsx";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <AnimatedOnScroll>
        <img src={image} alt="portrait image"/>
      </AnimatedOnScroll>
      <div className={styles.intro}>
        <AnimatedOnScroll>
          <h1>
            Привіт, я Вікторія.
          </h1>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <p>
            Кінезілогія, остеопатія, психокінезілогія, цілительство, китайська традиційна медицина, енергопатія, мабуть,
            ще багато.
          </p>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <button className="circle size-l">
            <div className="background"></div>
            <span className="text">Запис на косультацію</span>
          </button>
        </AnimatedOnScroll>
      </div>
    </section>
  )
}

export default Hero;
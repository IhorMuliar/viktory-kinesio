import image from "../../assets/images/hero-portrait.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={image} alt="portrait image"/>
      <div className={styles.intro}>
        <h1>
          Людина - це набір однакових нот, а я їми граю.
        </h1>
        <i>
          Кінезілогія, остеопатія, психокінезілогія, цілительство, китайська традиційна медицина, енергопатія, мабуть,
          ще багато.
        </i>
        <button className="circle size-l">
          <div className="background"></div>
          <span className="text">Запис на косультацію</span>
        </button>
      </div>
    </section>
  )
}

export default Hero;
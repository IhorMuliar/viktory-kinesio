import image from "../../assets/images/hero-portrait.jpg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={image} alt="portrait image"/>
      <div className={styles.intro}>
        <h1 className="bold-xl">
          Людина - це набір однакових нот, а я їми граю.
        </h1>
        <p>
          Кінезілогія, остеопатія, психокінезілогія, цілительство, китайська традиційна медицина, енергопатія, мабуть,
          ще багато.
        </p>
        <button className="primary size-l secondary">
          Записатись на косультацію
        </button>
      </div>
    </section>
  )
}

export default Hero;
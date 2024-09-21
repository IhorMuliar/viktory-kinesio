import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import styles from "./Process.module.css";

const Process = () => {
  return (
    <section className={styles.process}>
      <h2 className="bold-xl">Як це відбувається</h2>
      <ul className={styles.steps}>
        <li className={styles.step}>
          <h3 className="bold-l">Крок 1</h3>
          <img src={icon4} alt="test icon"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
        </li>
        <li className={styles.step}>
          <h3 className="bold-l">Крок 2</h3>
          <img src={icon5} alt="test icon"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
        </li>
        <li className={styles.step}>
          <h3 className="bold-l">Крок 3</h3>
          <img src={icon6} alt="test icon"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut porttitor dui. Quisque volutpat felis
            vel
            est accumsan, non efficitur mi suscipit. In blandit nunc urna, a accumsan sapien mattis vel. Nam
            interdum
            lorem sed est suscipit, id euismod risus dictum. Nunc et convallis justo, et vehicula metus. Duis
            pretium
            quam non bibendum congue. Suspendisse a felis dolor.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Process;
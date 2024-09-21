import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className="bold-xl">
          Терапевтичні послуги
        </h2>
        <ul>
          <div className={styles.row}>
            <li>
              <h3 className="bold-m">
                Фізіотерапевт
              </h3>
              <img src={icon1} alt="test icon" />
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
            <li>
              <h3 className="bold-m">
                Остеопат
              </h3>
              <img src={icon2} alt="test icon"/>
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
            <li>
              <h3 className="bold-m">
                Енерготерапевт
              </h3>
              <img src={icon3} alt="test icon"/>
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
          </div>
          <div className={styles.row}>
            <li>
              <h3 className="bold-m">
                Фізіотерапевт
              </h3>
              <img src={icon1} alt="test icon" />
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
            <li>
              <h3 className="bold-m">
                Остеопат
              </h3>
              <img src={icon2} alt="test icon"/>
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
            <li>
              <h3 className="bold-m">
                Енерготерапевт
              </h3>
              <img src={icon3} alt="test icon"/>
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
          </div>
        </ul>
      </div>
    </section>
  )
}

export default Services;
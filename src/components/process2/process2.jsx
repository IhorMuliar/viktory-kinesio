import styles from "./Process2.module.css";
import liquid from "../../assets/images/liquid.mp4";
import image from "../../assets/images/hero-portrait.jpg";
import {processes} from "./constants.js";

const Process2 = () => {
  return (
    <section className={styles.process2} id="process">
      <div className={styles.video}>
        <video src={liquid} autoPlay={true} loop={true} muted={true} playsInline={true} preload="auto" />
      </div>
      <div className={styles.container}>
        <img src={image} alt="test image"/>
        <ul>
          {processes.map((process) => (
            <li key={process.index}>
              <p className={styles.index}>/{process.index}</p>
              <p className={styles.title}>{process.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Process2;
import React from 'react'

import clock from "../../assets/images/clock.jpg";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className="bold-xl">
        Title
      </h2>
      <ul>
        <li>
          <img src={clock} alt="clock"/>
          <div>
            <h3 className="bold-m">
              Subtitle
            </h3>
            <p>
              Use 1 sentence in 1-3 lines
            </p>
          </div>
        </li>
        <li>
          <img src={clock} alt="clock"/>
          <div>
            <h3 className="bold-m">
              Subtitle
            </h3>
            <p>
              Use 1 sentence in 1-3 lines
            </p>
          </div>
        </li>
        <li>
          <img src={clock} alt="clock"/>
          <div>
            <h3 className="bold-m">
              Subtitle
            </h3>
            <p>
              Use 1 sentence in 1-3 lines
            </p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Features;
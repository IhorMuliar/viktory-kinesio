import React from 'react'

import image from "../../assets/image.jpg";
import styles from "./Content.module.css";

export const Content = () => {
  return (
    <section className={styles.content}>
      <div className={styles.text_container}>
        <h2 className="bold-xl">
          The title is what the block is about
        </h2>
        <div className={styles.description}>
          <p>
            Short description. Use 1-2 sentences in 2-4 lines
          </p>
          <p>
            The description is the basic meaning. Use 1-2 sentences in 1-3 lines if alignment is centered. With a large
            amount of text, use the second type of content alignment
          </p>
        </div>
      </div>
      <div className={styles.articles}>
        <article>
          <img src={image} alt="image"/>
          <div className={styles.text_container}>
            <h3 className="bold-l">
              Subtitle. The font cone can be larger
            </h3>
            <p>
              Description in 3-5 lines
            </p>
          </div>
        </article>
        <article>
          <img src={image} alt="image"/>
          <div className={styles.text_container}>
            <h3 className="bold-l">
              Subtitle. The font cone can be larger
            </h3>
            <p>
              Description in 3-5 lines
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

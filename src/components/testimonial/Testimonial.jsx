import React from 'react'

import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h2 className="bold-xl">Title</h2>
          <p>
            Description - the main idea. Use 1-2 sentences in 1-3 lines if centered.
            For more text, use a different type of content alignment.
          </p>
        </div>
        <div className={styles.reviews}>
          <div className={styles.review}>
            <p>
              Customer review. Use 1-2 sentences in 2-4 lines. Ideally, the text in reviews should be of equal weight
              (number of lines +- the same), so that some reviews do not seem heavy + long descriptions are read by a
              small percentage of people
            </p>
          </div>
          <div className={styles.review}>
            <p>
              Customer review. Use 1-2 sentences in 2-4 lines. Ideally, the text in reviews should be of equal weight
              (number of lines +- the same), so that some reviews do not seem heavy + long descriptions are read by a
              small percentage of people
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
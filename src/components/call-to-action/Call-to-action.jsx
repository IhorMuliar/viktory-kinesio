import React from 'react'

import styles from './Call-to-action.module.css';

export const CallToAction = () => {
  return (
    <section>
      <div className={styles.container}>
        <h2 className="bold-xl">
          Title
        </h2>
        <div className={styles.description}>
          <p>
            The description is the basic meaning. Use 1-2 sentences in 1-3 lines if alignment is centered. With a large
            amount of text, use the second type of content alignment
          </p>
          <button className="primary size-l">
            Contact
          </button>
        </div>
      </div>
    </section>
  )
}

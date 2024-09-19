import quote from '../../assets/images/quote.png';
import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.text_container}>
          <h2 className="bold-xl">Відгуки</h2>
        </div>
        <div className={styles.review}>
          <img src={quote} alt="quote"/>
          <p className="">
            Customer review. Use 1-2 sentences in 2-4 lines. Ideally, the text in reviews should be of equal weight
            (number of lines +- the same), so that some reviews do not seem heavy + long descriptions are read by a
            small percentage of people
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
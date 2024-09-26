import styles from './Faq.module.css';

const Faq = () => {
  return (
    <section className={styles.faq}>
      <div className={styles.text_container}>
        <h2 className="bold-xl">
          Питання та <br/>відповіді
        </h2>
        <p>
          Ось кілька типових запитань, які я отримую про терапію.
        </p>
      </div>
      <ul className={styles.questions}>
        <li className={styles.question}>
          <p className="regular-m">З чим пряцює кінезіологія?</p>
        </li>
        <li className={styles.question}>
          <p className="regular-m">Чи допомагає це при тривожному розладі?</p>
        </li>
        <li className={styles.question}>
          <p className="regular-m">Чи лікуються розлади харчової поведінки?</p>
        </li>
        <li className={styles.question}>
          <p className="regular-m">Якщо травма отримана фізично, це все одно має відношення до емецій?</p>
        </li>
      </ul>
    </section>
  )
}

export default Faq;

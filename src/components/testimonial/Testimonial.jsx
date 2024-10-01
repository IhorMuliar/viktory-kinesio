import styles from './Testimonial.module.css';

const Testimonial = () => {
  return (
    <section className={styles.testimonial} id="testimonial">
      <div className={styles.text_container}>
        <h2 className="bold-xl">Відгуки</h2>
      </div>
      <ul>
        <li className={styles.first}>
          <div className={styles.imessage}>
            <div className={styles.from_them_container}>
              <p className={`${styles.from_them} ${styles.no_tail}`}>
                Доброго дня, карти працюють то є факт, головне щоб ще людина використовувала ті інсайти, які отримує, я
                дивлячись на ті що мені витягнули Ви, Вікторія, багато над чим задумалась, і однозначно вони не прості,
                досить глибокі. А ще я помітила, що ці карти вони такі цікаві, бо навіть переглядаючи згодом, ти бачиш в
                тих же картах щось зовсім інше))
              </p>
              <p className={styles.from_them}>
                тож таки да, вони працюють 🥰
              </p>
            </div>
            <div className={styles.from_them_container}>
              <p className={`${styles.from_them} ${styles.no_tail}`}>
                особисто я багато чого зрозуміла, але ще не так активно інтегрувала в своє життя, ті висновки 🤷‍♀,
                працюю
                над цим
              </p>
              <p className={styles.from_them}>
                дуже вдячна Вам за таку рубрику ❤️
              </p>
            </div>
          </div>
        </li>
        <li className={styles.second}>
          <div className={styles.imessage}>
            <div className={styles.from_them_container}>
              <p className={`${styles.from_them} ${styles.no_tail}`}>
                Добрий вечір, ще раз дякую за Вашу роботу, з моменту виходу від Вас нічого не болить та глаз не
                слизиться,
                таке вперше за тиждень. Інколи пульсує над скронею, але це не боляче. <br/>
                Трохи голова важка, але це теж єрунда, настрій супер. Надіюсь на подальшу співпрацю 🤝. <br/>
                Ще раз ДЯКУЮ!!!
              </p>
              <p className={styles.from_them}>
                Аж якось дихати легше стало)))
              </p>
            </div>
            <div className={styles.from_them_container}>
              <p className={styles.from_them}>
                І я до вас їхав в темних окулярах, світло подразнбвало око, а назад вже без них 🙂
              </p>
            </div>
            <div className={styles.from_me_container}>
              <p className={`${styles.from_me}`}>
                Доброго вечора. Дуже рада, шо Ви отримали такі бажанні результати - полегшення.
              </p>
            </div>
          </div>
        </li>
        <li className={styles.third}>
          <div className={styles.imessage}>
            <div className={styles.from_them_container}>
              <p className={`${styles.from_them} ${styles.no_tail}`}>
                Добрий вечір, ще раз дякую за Вашу роботу, з моменту виходу від Вас нічого не болить та глаз не
                слизиться,
                таке вперше за тиждень. Інколи пульсує над скронею, але це не боляче. <br/>
                Трохи голова важка, але це теж єрунда, настрій супер. Надіюсь на подальшу співпрацю 🤝. <br/>
                Ще раз ДЯКУЮ!!!
              </p>
              <p className={styles.from_them}>
                Аж якось дихати легше стало)))
              </p>
            </div>
            <div className={styles.from_them_container}>
              <p className={styles.from_them}>
                І я до вас їхав в темних окулярах, світло подразнбвало око, а назад вже без них 🙂
              </p>
            </div>
            <div className={styles.from_me_container}>
              <p className={`${styles.from_me}`}>
                Доброго вечора. Дуже рада, шо Ви отримали такі бажанні результати - полегшення.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Testimonial;
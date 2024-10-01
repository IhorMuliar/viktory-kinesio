// import image from "../../assets/images/horizontal-test.jpg";
// import AnimatedOnScroll from "../shared/AnimatedOnScroll.jsx";
// import styles from "./Hero.module.css";
//
// const Hero = () => {
//   return (
//     <section className={styles.hero}>
//       <AnimatedOnScroll>
//         <img src={image} alt="portrait image"/>
//       </AnimatedOnScroll>
//       <div className={styles.intro}>
//         <AnimatedOnScroll>
//           <h1>
//             Привіт, я Вікторія.
//           </h1>
//         </AnimatedOnScroll>
//         <AnimatedOnScroll>
//           <p>
//             Фізичний терапевт за базовою вищою освітою. Та за 20 років своєї практики, я постійно додаю нові ключики в
//             скарбничку.
//           </p>
//           <p>
//             Кінезіотерапія,
//             прикладна кінезіологія,
//             енергокінезіологія,
//             психокінезіолонія,
//             інтегративна кінезіологія,
//             китайська медицина,
//             остеопатія,
//             цілительсво,
//             тонкопланові техніки
//             та дар від народження.
//           </p>
//           <p>
//             Все це поєдную та використовую індивідуально до особливостей та потреб Клієнта. Тому не можливо наперед
//             сказати як це. Можу обіцяти лише одне:
//             Це буде цікаво, з посмішкою та бережністю до Тебе.
//             Адже Я знаю як Твоє тіло запитати що є причиною скарг, та як перекласти його відповідь зрозуміло Твоєму
//             мозку
//             Тому приходь та знайомся із собою та своїм тілом.
//           </p>
//         </AnimatedOnScroll>
//         <AnimatedOnScroll>
//           <button className="circle size-l">
//             <div className="background"></div>
//             <span className="text">Запис на косультацію</span>
//           </button>
//         </AnimatedOnScroll>
//       </div>
//     </section>
//   )
// }
//
// export default Hero;







import image from "../../assets/images/horizontal-test.jpg";
import AnimatedOnScroll from "../shared/AnimatedOnScroll.jsx";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <AnimatedOnScroll>
        <h1>
          Привіт, я Вікторія.
        </h1>
      </AnimatedOnScroll>
      <div className={styles.intro}>
        <AnimatedOnScroll>
          <img src={image} alt="portrait image"/>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <p>
            Фізичний терапевт за базовою вищою освітою. Та за 20 років своєї практики, я постійно додаю нові ключики в
            скарбничку.
          </p>
          <p className={styles.speciality4}>
            Кінезіотерапія,
            прикладна кінезіологія,
            енергокінезіологія,
            психокінезіолонія,
            інтегративна кінезіологія,
            китайська медицина,
            остеопатія,
            цілительсво,
            тонкопланові техніки
            та дар від народження.
          </p>
          <p>
            Все це поєдную та використовую індивідуально до особливостей та потреб Клієнта. Тому не можливо наперед
            сказати як це. Можу обіцяти лише одне:
            Це буде цікаво, з посмішкою та бережністю до Тебе.
            Адже Я знаю як Твоє тіло запитати що є причиною скарг, та як перекласти його відповідь зрозуміло Твоєму
            мозку
            Тому приходь та знайомся із собою та своїм тілом.
          </p>
        </AnimatedOnScroll>
      </div>
      <div className={styles.animation}>
        <AnimatedOnScroll>
          <button className="circle size-l">
            <div className="background"></div>
            <span className="text">Запис на косультацію</span>
          </button>
        </AnimatedOnScroll>
      </div>
    </section>
  )
}

export default Hero;
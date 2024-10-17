// import logo from '../../assets/images/logo.svg';
// import styles from './Header.module.css';
//
// const Header = () => {
//   return (
//     <header>
//       <div className={styles.container}>
//         <a href="/" className={styles.logo}>
//           <img src={logo} alt="logo"/>
//         </a>
//         <nav>
//           <ul className={styles.navigation_links}>
//             <li>
//               <a className="regular-s" href="#content">Про мене</a>
//             </li>
//             <li>
//               <a className="regular-s" href="#services">Спеціалізація</a>
//             </li>
//             <li>
//               <a className="regular-s" href="#process">Процес</a>
//             </li>
//             <li>
//               <a className="regular-s" href="#faq">Питання та відповіді</a>
//             </li>
//             <li>
//               <a className="regular-s" href="#testimonial">Відгуки</a>
//             </li>
//             <li>
//               <button className="primary size-l">
//                 <span className="text">
//                   Запис
//                 </span>
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }
//
// export default Header;

import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ul className={styles.navigation_links}>
            <li>
              <a className="regular-s" href="#content">Про мене</a>
            </li>
            <li>
              <a className="regular-s" href="#services">Спеціалізація</a>
            </li>
            <li>
              <a className="regular-s" href="#process">Процес</a>
            </li>
          </ul>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="logo"/>
          </a>
          <ul className={styles.navigation_links}>
            <li>
              <a className="regular-s" href="#faq">Питання та відповіді</a>
            </li>
            <li>
              <a className="regular-s" href="#testimonial">Відгуки</a>
            </li>
            <li>
              <a className="regular-s" href="#testimonial">Контакти</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
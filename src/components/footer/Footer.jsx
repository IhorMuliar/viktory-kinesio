import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import background from "../../assets/images/footer-bg.svg";

const Footer = () => {
  return (
    <footer>
      <img src={background} alt="test background" className={styles.background} />
      <div className={styles.container}>
        <ul className={styles.navigation_links}>
          <li>
            <a className="regular-s" href="#">Про мене</a>
          </li>
          <li>
            <a className="regular-s" href="#">Спеціалізація</a>
          </li>
          <li>
            <a className="regular-s" href="#">Питання та відповіді</a>
          </li>
          <li>
            <a className="regular-s" href="#">Відгуки</a>
          </li>
          <li>
            <a className="regular-s" href="#">Контакти</a>
          </li>
        </ul>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo"/>
        </a>
        <div className={styles.description}>
          <p className="regular-s">© 2024 Viktory Kinesio</p>
          <p className="regular-s">All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="logo"/>
        </a>
        <nav>
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
            <li>
              <button className="size-l primary">Запис</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
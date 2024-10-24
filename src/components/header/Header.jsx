import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import logo from '../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    menuOpen
      ? document.body.style.overflow = "scroll"
      : document.body.style.overflow = "hidden";
  };

  return (
    <motion.header
      initial={{translateY: '-100%'}}
      animate={{translateY: 0}}
      transition={{duration: 1.2}}
    >
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
          <button
            className={`${styles.burger} primary size-m ${menuOpen ? styles.open : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.menu_container}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
          >
            <motion.ul
              initial={{translateY: '3%'}}
              animate={{translateY: 0}}
              exit={{translateY: '2%'}}
              transition={{duration: 0.2}}
            >
              <li>
                <a className="regular-s" href="#content" onClick={toggleMenu}>Про мене</a>
              </li>
              <li>
                <a className="regular-s" href="#services" onClick={toggleMenu}>Спеціалізація</a>
              </li>
              <li>
                <a className="regular-s" href="#process" onClick={toggleMenu}>Процес</a>
              </li>
              <li>
                <a className="regular-s" href="#faq" onClick={toggleMenu}>Питання та відповіді</a>
              </li>
              <li>
                <a className="regular-s" href="#testimonial" onClick={toggleMenu}>Відгуки</a>
              </li>
              <li>
                <a className="regular-s" href="#testimonial" onClick={toggleMenu}>Контакти</a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header;
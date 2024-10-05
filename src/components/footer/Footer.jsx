import {useEffect, useRef, useState} from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsFooterVisible(true);
          } else {
            setIsFooterVisible(false);
          }
        });
      },
      {threshold: 0.1}
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef}>
      <div className={`${styles.footer_rectangles} ${isFooterVisible ? styles.footer_visible : ''}`}>
        <div className={`${styles.rectangle} ${styles.rectangle_1}`}></div>
        <div className={`${styles.rectangle} ${styles.rectangle_2}`}></div>
        <div className={`${styles.rectangle} ${styles.rectangle_3}`}></div>
        <div className={`${styles.rectangle} ${styles.rectangle_4}`}></div>
        <div className={`${styles.rectangle} ${styles.rectangle_5}`}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.description}>
          <a href="/" className={styles.logo}>
            <img src={logo} alt="logo"/>
          </a>
          <ul className={styles.navigation_links}>
            <li>
              <a className="regular-s reversed" href="#content">Про мене</a>
            </li>
            <li>
              <a className="regular-s reversed" href="#services">Спеціалізація</a>
            </li>
            <li>
              <a className="regular-s reversed" href="#process">Процес</a>
            </li>
            <li>
              <a className="regular-s reversed" href="#faq">Питання та відповіді</a>
            </li>
            <li>
              <a className="regular-s reversed" href="#testimonial">Відгуки</a>
            </li>
            <li>
              <a className="regular-s reversed" href="#contacts">Контакти</a>
            </li>
          </ul>
          <div className={styles.location}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.4598472325671!2d30.54398460656596!3d50.42014432112399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6c96d00001%3A0x26aea51b084f03ca!2zTWFyaWkgUHJ5aW1hY2hlbmtvIEJsdmQsIDgsINC-0YTRltGBIDMsIEt5aXYsIDAxMDQy!5e0!3m2!1sen!2sua!4v1726950550558!5m2!1sen!2sua"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            >
            </iframe>
            <p className={styles.address}>
              кв 70, 2 поверх, 4 під‘їзд,  <br />
              Бульвар Марії Приймаченко 8
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2024 Viktory Kinesio. All rights reserved.</p>
          <div className={styles.socials}>
            <a className="icon-link" href="#">T</a>
            <a className="icon-link" href="#">I</a>
            <a className="icon-link" href="#">Y</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

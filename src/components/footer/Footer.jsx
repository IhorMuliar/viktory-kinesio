import React from 'react'

// import logo from "../../assets/images/logo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        {/*<img src={logo} alt="logo"/>*/}
        <p>2024</p>
        <a>
          <img src="" alt="instagram"/>
        </a>
        <a>
          <img src="" alt="instagram"/>
        </a>
        <a>
          <img src="" alt="instagram"/>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
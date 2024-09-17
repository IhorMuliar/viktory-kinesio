import React from 'react'

import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <img src={logo} alt="logo"/>
        <p>2024</p>
        <a className="reversed">
          <img src="" alt="instagram"/>
        </a>
        <a className="reversed">
          <img src="" alt="instagram"/>
        </a>
        <a className="reversed">
          <img src="" alt="instagram"/>
        </a>
      </div>
    </footer>
  )
}

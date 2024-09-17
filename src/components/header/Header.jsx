import React from 'react'

import logo from '../../assets/logo.png';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <img src={logo} alt="logo"/>
        <nav>
          <ul>
            <li>
              <a className="reversed regular-s" href="#">Link 1</a>
            </li>
            <li>
              <a className="reversed regular-s" href="#">Link 2</a>
            </li>
            <li>
              <a className="reversed regular-s" href="#">Link 3</a>
            </li>
            <li>
              <a className="reversed regular-s" href="#">Link 4</a>
            </li>
            <li>
              <a className="reversed regular-s" href="#">Link 5</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

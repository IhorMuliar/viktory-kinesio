import React from 'react'

import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header>
        <div className="container">
             <img src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <a className="regular-s" href="#">Link 1</a>
                    </li>
                    <li>
                        <a className="regular-s" href="#">Link 2</a>
                    </li>
                    <li>
                        <a className="regular-s" href="#">Link 3</a>
                    </li>
                    <li>
                        <a className="regular-s" href="#">Link 4</a>
                    </li>
                    <li>
                        <a className="regular-s" href="#">Link 5</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

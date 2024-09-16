import React from 'react'
// import logoImage from "@/public/logo.png";

export const Header = () => {
  return (
    <header>
        <div class="container">
            {/* <img src={logoImage} alt="logo" /> */}
            <nav>
                <ul>
                    <li>
                        <a class="regular-s" href="#">Link 1</a>
                    </li>
                    <li>
                        <a class="regular-s" href="#">Link 2</a>
                    </li>
                    <li>
                        <a class="regular-s" href="#">Link 3</a>
                    </li>
                    <li>
                        <a class="regular-s" href="#">Link 4</a>
                    </li>
                    <li>
                        <a class="regular-s" href="#">Link 5</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

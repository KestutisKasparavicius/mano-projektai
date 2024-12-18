import React from 'react'
import HeaderCSS from "../styles/header.module.css"
const Header = () => {
  return (
    <header className={HeaderCSS.header}>
        <nav className={HeaderCSS.nav}>
            <ul className={HeaderCSS.list}>
                <li><a href="#">Novel</a></li>
                <li><a href="#">Romance</a></li>
                <li><a href="#">Sci-fi</a></li>
                <li><a href="#">Self Help</a></li>
            </ul>
        </nav>
    </header>

  )
}

export default Header
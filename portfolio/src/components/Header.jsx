import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="logo"><span>H</span>ari prasath.</div>
        <ul className="navlist">
            <li><a href="#home" >Home</a></li>
            <li><a href="#about" >About</a></li>
            <li><a href="#services" >Services</a></li>
            <li><a href="#skills" >Skills</a></li>
            <li><a href="#certificates" >Certificates</a></li>
            <li><a href="#portfolio" >Portfolio</a></li>
            <li><a href="#contact" >Contact</a></li>
        </ul>
        <div id="menu-icon" class="bx bx-menu"></div>
    </header>
  )
}

export default Header

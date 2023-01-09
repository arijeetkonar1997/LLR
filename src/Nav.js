import React from 'react'
import logo from './icons_assets/Logo.svg'
function Nav() {
  return (
    <>
    <nav>
    <img src={logo} alt="logo not available"></img>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
    </ul>
    </nav>
    </>
  )
}

export default Nav

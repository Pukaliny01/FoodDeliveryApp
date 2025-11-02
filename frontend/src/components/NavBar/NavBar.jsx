import React, { useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets.js'

const NavBar = () => {

  const [menu,setMenu] = useState("contact us");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        <li className={menu==="home"?"active":""}>home</li>
        <li className={menu==="menu"?"active":""}>menu</li>
        <li className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default NavBar
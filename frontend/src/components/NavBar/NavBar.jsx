import React from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets.js'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="Logo"/>
    </div>
  )
}

export default NavBar
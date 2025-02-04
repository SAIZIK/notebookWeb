import React from 'react'
import '../styles/nav.css'
import { NavLink } from 'react-router-dom'
import homeicon from '../assests/icons8-home-48.png'
import contacticon from '../assests/icons8-phone-bubble-128.png'
import carticon from '../assests/icons8-shopping-cart-48.png'

const Nav = () => {
  return (
    <div className='nav'>
        <h2>hopes <span>touch</span></h2>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              <img src={homeicon} alt='homeicon' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              <img src={contacticon} alt='contacticon' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' activeClassName='active'>
              <img src={carticon} alt='carticon' />
            </NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Nav

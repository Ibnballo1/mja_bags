import React from 'react'
import NavBar from './NavBar';
import logo from '../assets/images/mja-logo.png';
import '.././App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <NavBar className='navBar' />
      <div className='logo'><img src={logo} width={50} height={50} /></div>
      <div className='env'><FontAwesomeIcon icon={faEnvelope} /></div>
    </header>
  )
}

export default Header
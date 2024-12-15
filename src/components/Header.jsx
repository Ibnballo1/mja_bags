import React from 'react'
import NavBar from './NavBar';
import logo from '../assets/images/mja-logo.webp';
import '.././App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <NavBar />
      <div className='logo'><img src={logo} width={30} height={30} /></div>
      {/* <div><FontAwesomeIcon icon={faEnvelope} /></div> */}
    </header>
  )
}

export default Header
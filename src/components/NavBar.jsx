import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css'

function NavBar() {
  const [toggleNav, setToggleNav] = useState(true);

  const handleClick = () => {
    setToggleNav(!toggleNav);
  }
  return (
    <nav>
      <div className='navIcon' onClick={()=> handleClick()}>
        {toggleNav ? <FontAwesomeIcon icon={faBars} className='icons' /> : <FontAwesomeIcon icon={faClose} className='icons' />}
      </div>
      <ul className={toggleNav ? 'open' : 'close'}>
        <li className='navLi'><a href="#">Home</a></li>
        <li className='navLi'><a href="#">About</a></li>
        <li className='navLi'><a href="#">Products</a></li>
        <li className='navLi'><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
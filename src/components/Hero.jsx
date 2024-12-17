import React from 'react'
import '../styles/hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'

function Hero() {
  return (
    <div className='hero'>
      <h1>Welcome to the MJA Company</h1>
      <p>Discover Your Perfect Bag</p>
      <div className='shopNow'>
        <FontAwesomeIcon icon={faShoppingCart} className='cart' />
        <a href='#' className='shopNowBtn'>Shop Now</a>
      </div>
    </div>
  )
}

export default Hero
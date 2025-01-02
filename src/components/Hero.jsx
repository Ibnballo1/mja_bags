import React from 'react'
import '../styles/hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'

function Hero() {
  return (
    <div className='hero'>
      <h1>Discover Your Perfect Bag</h1>
      <div className='shopNow'>
        <a href='#' className='shopNowBtn'>
          <FontAwesomeIcon icon={faShoppingCart} className='cart' />
          <span>Shop Now</span>
        </a>
      </div>
    </div>
  )
}

export default Hero
import React, { useEffect, useState } from 'react';
import '../styles/bestSellers.css';

function BestSeller() {
  const visibleItems = 3;

  return (
    <section className='best-sellers'>
      <h3>BEST SELLERS</h3>
      <Carousel />
    </section>
  )
}

export default BestSeller
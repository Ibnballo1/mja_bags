import React from 'react';
import { useState } from 'react';
import CarouselControls from './CarouselControls';
import CarouselItem from './CarouselItem';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 1,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${bagImg}`
    },
    {
      id: 2,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${delsey}`
    },
    {
      id: 3,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${bagImg}`
    },
    {
      id: 4,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${delsey}`
    },
    {
      id: 5,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${bagImg}`
    },
    {
      id: 6,
      category: 'Luggage',
      name: 'Samsonite',
      description: 'This travel pillow is designed to offer the right amount of comfort and support for your neck and head. It is made from high-quality memory foam that molds to the shape of your neck and head.',
      price: '$19.99',
      image: `${delsey}`
    },
  ]

  const handleLeftClick = () => {
    setActiveIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : items.length - visibleItems)
  }

  const handleRightClick = () => {
    setActiveIndex((prevIndex) => prevIndex < items.length - visibleItems ? prevIndex + 1 : 0)
  }

  return (
    <div className="carousel">
      <CarouselControls handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}>
      <div className='carousel-track'>
      {
        items.map((item, index) => (
          <CarouselItem item={item} index={index} activeIndex={activeIndex} />
        ))
      }
      </div>
      </CarouselControls>
    </div>
  )
}

export default Carousel
import React from 'react'

const CarouselItem = ({item, index, activeIndex}) => {
  return (
    <div
      key={index}
      className="carousel-item"
      style={{transform: `translateX(-${activeIndex * 100}%)`}}
    >
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>{item.price}</p>
    </div>
  )
}

export default CarouselItem
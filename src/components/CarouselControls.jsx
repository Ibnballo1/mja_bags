import React from 'react'

const CarouselControls = ({handleLeftClick, handleRightClick}) => {
  return (
    <div>
      <button className="arrow left" onClick={handleLeftClick}>{"<"}</button>
      <button className="arrow right" onClick={handleRightClick}>{">"}</button>
    </div>
  )
}

export default CarouselControls
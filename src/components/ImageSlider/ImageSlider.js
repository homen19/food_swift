import React from 'react'
import './ImageSlider.css';

import fooding from "./Images/foodimg.png";


export const ImageSlider = () => {
  return (
    <>
      <div className="image-slider">
        <div className='image-slider-container'>
          <div className="text">
            <h3>50% discount on all products</h3>
            <h1>Enjoy Your <span className='s1'>Special</span></h1>
            <h1>Delicious meal</h1>
          </div>
          <div className='image'>
          <img src={fooding} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

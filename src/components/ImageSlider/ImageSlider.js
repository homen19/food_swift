import React from 'react'
import './ImageSlider.css';
import foodimg from './Images/foodimg.png';
export const ImageSlider = () => {
  return (
    <>
      <div className="image-slider">
        <div className='image-slider-container'>
          <div className="text">
            <h3>50% discount on all products</h3>
            <h2>Enjoy Your <span className='s1'>Special</span></h2>
            <h2>Delicious meal</h2>
          </div>
          <div className='image'>
            <img src= {foodimg}></img>
          </div>
        </div>
      </div>

    </>
  )
}

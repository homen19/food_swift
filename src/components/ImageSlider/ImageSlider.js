import React from 'react'
import './ImageSlider.css';
<<<<<<< HEAD
import fooding from "./Images/foodimg.png";
=======
import foodimg from './Images/foodimg.png';
>>>>>>> be351cd882e58dc58502bc1639bd78e46c37bb16
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
<<<<<<< HEAD
            <img src={fooding} alt="" />
=======
            <img src= {foodimg}></img>
>>>>>>> be351cd882e58dc58502bc1639bd78e46c37bb16
          </div>
        </div>
      </div>

    </>
  )
}

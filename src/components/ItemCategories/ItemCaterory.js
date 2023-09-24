
import React from 'react'
import './ItemCategory.css';
import biriyaniType from "../../assets/Images/biryaniType.png";
export const ItemCategory = () => {
  return (
    <>
      <div className="item-category">
        <h2>Image Category</h2>
        <div className="items-cat">
          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>

          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>
          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>
          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>
          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>
          
          <div className="item-cat-card">
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
          </div>

        </div>
      </div>
    </>
  )
}


import React from 'react'
import './ItemCategory.css';
<<<<<<< HEAD
import biriyaniType from "../../assets/Images/biryaniType.png";
export const ItemCategory = () => {
  return (
    <>
      <div className="item-category">
        <h2>Image Category</h2>
        <div className="items-cat">
          <div className="item-cat-card">
=======
import { ItemCategories } from '../../utility/Data';
export const ItemCategory = () => {
  console.log(ItemCategories);
  return (
    <>
      <div className="item-category">
        <h1>Image Category</h1>
        <div className="items-cat">
          {/* <div className="item-cat-card">
>>>>>>> 4fb9c843454258bb2f5131905a3cb1ca493a4790
            <div className="items-cat-type">
              <img src={biriyaniType} alt="" /> 
            </div>
            <p>Biriyani</p>
<<<<<<< HEAD
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
=======
          </div> */}
          {
            ItemCategories.map(item => (
              <div key={item.id} className="item-cat-card">
                <div className="items-cat-type">
                  <img src={item.imgUrl} alt='img' />
                </div>
                <p>{item.name}</p>
              </div>
            ))
          }

>>>>>>> 4fb9c843454258bb2f5131905a3cb1ca493a4790

        </div>
      </div>
    </>
  )
}


import React from 'react'
import './ItemCategory.css';

import { ItemCategories } from '../../utility/Data';
export const ItemCategory = () => {
  console.log(ItemCategories);
  return (
    <>
      <div className="item-category">
        <h1>Image Category</h1>
        <div className="items-cat">
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

        </div>
      </div>
    </>
  )
}

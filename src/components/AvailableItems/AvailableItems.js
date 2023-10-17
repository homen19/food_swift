import React from "react";
import "./AvailableItems.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBookmark } from "@fortawesome/free-solid-svg-icons";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ItemCategories } from "../../utility/Data";

export const AvailableItems = () => {
  console.log(ItemCategories);

  // const ShoopingCart = () => {
  //   return <FontAwesomeIcon icon={faCartShopping} />;
  // };

  // const Bookmark = () => {
  //   return <FontAwesomeIcon icon={faBookmark} />;
  // };

  const Star = () => {
    return <FontAwesomeIcon icon={faStar} />;
  };

  return (
    <div className="container">
      <h1>AvailableItems</h1>

      <div className="AvailableItems">

        {ItemCategories.map((rickey) => (
          <div className="itemList">
            <div key={rickey.id} className="product-card">
              <div className="shopping-cart">
                {/* // shopping card section */}
              </div>
              <div className="main-image">
                <img
                  src={rickey.imgUrl}
                  alt="item-imgage"
                  className="item_image"
                />
              </div>
              <div className="food-details">
                <span className="item-name">{rickey.name}</span>

                <div className="stars">
                  <div className="itemRating">
                    {[...Array(rickey.rating)].map((index) => (
                      <Star id={index + 1} key={index} />
                    ))}
                  </div>

                  <div className="offer">
                    <span className="off">{rickey.offer}%off</span>
                  </div>
                </div>

                <div className="price">
                  <span className="discount">
                    ₹ {rickey.price - rickey.price * (rickey.offer / 100)}
                  </span>
                  <span className="oriinalPrice">₹{rickey.price}</span>
                </div>
              </div>
              <div className="button">
                <button>Order Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

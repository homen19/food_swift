
import { React, useState } from 'react'
import './Navbar.css';
import cart from "../../assets/Images/cart1.png";
import profile from "../../assets/Images/prfiles.png";
import Profile from '../Profile/Profile';

export const Navbar = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [open, setOpen] = useState(false);

  const ProfileOffHandler = () => {
    if (!open) {
      setViewProfile(true);
      setOpen(true);
    }
    else {
      setViewProfile(false);
      setOpen(false);
    }
  }

  return (
    <>
      <div className='nav'>
        <div className="logo">
          <h3>Logo</h3>
        </div>
        <h2>Food Swift</h2>

        <div className="location">
          <p>Resturent Near Me</p>
        </div>

        <form className='form'>
          <input type="text" placeholder='What you want' />
          <button type='submit'>Search</button>
        </form>

        <div className="cart">
          <img src={cart} alt='cart' />
          <p className='cart-count'>2</p>
        </div>


        <div className="profile" onClick={ProfileOffHandler}>
          <img src={profile} alt="profile" />

        </div>
        {
          viewProfile && <Profile />
        }

      </div>
    </>

  )
}

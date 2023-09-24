import React from 'react'
import './Navbar.css';

export const Navbar = (props) => {
  return (
    <>
      <div className='nav'>
        <h2>Name is :{props.name}</h2>
        <h3>Brnach is : {props.branch}</h3>

      </div>
    </>

  )
}

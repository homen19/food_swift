import React from 'react'
import './Profile.css';

const Profile = () => {
  return (
    <>
      <div className='dropdown-menu'>
        <ul className='dropdownItem'>
              <li>My profile</li>
              <li>Edit profile</li>
              <li>Inbox</li>
              <li>Settings</li>
              <li>Helps</li>
              <li>Logout</li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
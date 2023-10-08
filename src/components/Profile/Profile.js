import React from 'react'
import './Profile.css';
<<<<<<< HEAD

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
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Profile = (props) => {
  return (
    <>
      <div className='dropdown-menu'>
        <ul>
              <li><FontAwesomeIcon icon={faUser} className='icon' />Your Profile</li><hr />
              <li><FontAwesomeIcon icon={faPenToSquare} className='icon'/>Edit profile</li><hr />
              <li><FontAwesomeIcon icon={faMessage} className='icon' />Inbox</li><hr />
              <li><FontAwesomeIcon icon={faGear} className='icon'/>Settings</li><hr />
              <li><FontAwesomeIcon icon={faCircleInfo} className='icon'/>Helps</li><hr />
              <li><FontAwesomeIcon icon={faRightFromBracket} className='icon'/>Logout</li>
>>>>>>> bad148d3a743e0320042744cd92f40bc334b827c
        </ul>
      </div>
    </>
  );
};

export default Profile;
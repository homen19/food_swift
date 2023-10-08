import React from 'react'
import './Profile.css';

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

        </ul>
      </div>
    </>
  );
};

export default Profile;
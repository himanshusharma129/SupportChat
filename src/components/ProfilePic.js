// ProfilePic.js
import React from 'react';
import '../styles/ProfilePic.css';

const ProfilePic = ({ imageUrl }) => {
  return (
    <div className="profile-pic">
      <img src={imageUrl} alt="img" />
    </div>
  );
};

export default ProfilePic;

import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="profile-data">
        <div className="user">
          <div className="user__thumb">
            <img src={avatar ? avatar : 'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'} alt={name} />
          </div>
          <p className="user__name">
            {name}
            <span>@{username}</span>
          </p>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;

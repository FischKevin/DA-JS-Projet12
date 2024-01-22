import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import KarlImage from '/src/assets/users/karl.jpg';
import CeciliaImage from '/src/assets/users/cecilia.jpg';

function UserCard({ user }) {
  let userImage;
  if (user.firstName === 'Karl') {
    userImage = KarlImage;
  } else if (user.firstName === 'Cecilia') {
    userImage = CeciliaImage;
  }

  return (
    <div className="user-card">
      <Link to={`/dashboard/${user.id}`}>
        <img src={userImage} alt={user.firstName} />
        <p>{user.firstName}</p>
      </Link>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;

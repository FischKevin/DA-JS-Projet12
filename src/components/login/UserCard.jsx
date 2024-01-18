import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <Link to={`/dashboard/${user.id}`}>
        <img src={user.photo} alt={user.firstName} />
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

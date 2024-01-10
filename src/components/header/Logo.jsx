import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Logo() {
  return (
    // Wrapping the logo image in a Link to make it clickable and navigate to the homepage.
    <Link to="/">
      {/* Logo image with dynamic source and class names based on the color prop */}
      <img
        src='/logo.png'
        alt="Logo du site SportSee"
        className={'logo'}
      />
    </Link>
  );
}

// Defining prop types for the component.
// Ensuring 'color' is one of the specified values ('red', 'white').
// Logo.propTypes = {
//   color: PropTypes.oneOf(['red', 'white']),
// };

export default Logo;
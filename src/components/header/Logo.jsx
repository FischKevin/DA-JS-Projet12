import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    // Wrapping the logo image in a Link to make it clickable and navigate to the homepage.
    <Link to="/">
      <img
        src='/logo.png'
        alt="Logo du site SportSee"
        className={'logo'}
      />
    </Link>
  );
}

export default Logo;
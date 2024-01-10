import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/">Profil</NavLink>
      <NavLink to="/">Réglage</NavLink>
      <NavLink to="/">Communauté</NavLink>
    </nav>
  );
}

export default Navbar;
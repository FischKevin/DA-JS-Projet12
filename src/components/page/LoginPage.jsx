import React from 'react';
import LoginMenu from '../login/LoginMenu';

const users = [
  {
    id: 12,
    photo: '/src/assets/users/karl.jpg',
    firstName: 'Karl',
  },
  {
    id: 18,
    photo: '/src/assets/users/cecilia.jpg',
    firstName: 'Cecilia',
  },
];

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Choisissez un utilisateur</h1>
      <LoginMenu users={users} />
    </div>
  );
}

export default LoginPage;

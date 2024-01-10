import React from 'react';
import SideMenu from './sideMenu/SideMenu';
import Dashboard from './dashboard/Dashboard';

// function to render the main container with side menu and dashboard
function MainContainer() {
  return (
    <>
    <div className='mainContainer'>
      <SideMenu />
      <Dashboard />
      </div>
    </>
  );
}

export default MainContainer;
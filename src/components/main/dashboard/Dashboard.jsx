import React from 'react';
import DashboardHeader from './DashboardHeader';
import DashboardMain from './DashboardMain';

// function to render the dashboard
function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <DashboardHeader />
      <DashboardMain />
    </div>
  );
}

export default Dashboard;
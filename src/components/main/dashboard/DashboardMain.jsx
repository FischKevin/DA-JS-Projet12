import React from 'react';
import DashboardMainGraphs from './DashboardMainGraphs';
import DashboardSideGraphs from './DashboardSideGraphs';


// function to render the dashboard
function DashboardMain() {
  return (
    <div className='dashboardMain'>
      <DashboardMainGraphs />
      <DashboardSideGraphs />
    </div>
  );
}

export default DashboardMain;
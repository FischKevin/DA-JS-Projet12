import React from 'react';
import DashboardMainTopGraph from './DashboardMainTopGraph';
import DashboardMainBottomGraphs from './DashboardMainBottomGraphs';

// function to render the dashboard
function DashboardMainGraphs() {
  return (
    <>
      <div className='mainGraphs'>
        <DashboardMainTopGraph />
        <DashboardMainBottomGraphs />
      </div>
    </>
  );
}

export default DashboardMainGraphs;
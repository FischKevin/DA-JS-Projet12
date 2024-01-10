import React from 'react';
import DashboardHeader from './DashboardHeader';
// import DashboardMain from './DashboardMain';
// import DashboardMainGraphs from './DashboardMainGraphs';
// import DashboardSideGraphs from './DashboardSideGraphs';
// import DashboardMainTopGraph from './DashboardMainTopGraph';
// import DashboardMainBottomGraphs from './DashboardMainBottomGraphs';

// function to render the dashboard
function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <DashboardHeader />
      {/* <DashboardMain>
        <DashboardMainGraphs>
          <DashboardMainTopGraph />
          <DashboardMainBottomGraphs />
        </DashboardMainGraphs>
        <DashboardSideGraphs />	
      </DashboardMain> */}
    </div>
  );
}

export default Dashboard;
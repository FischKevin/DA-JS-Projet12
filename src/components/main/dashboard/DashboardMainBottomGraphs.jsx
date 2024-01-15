import React from 'react';
import DashboardFirstBottomGraph from './DashboardFirstBottomGraph';
import DashboardSecondBottomGraph from './DashboardSecondBottomGraph';
// import DashboardThirdBottomGraph from './DashboardThirdBottomGraph';

function DashboardMainBottomGraph() {
  return (
      <div className='bottomGraphs'>
       <DashboardFirstBottomGraph />
       <DashboardSecondBottomGraph />
       <DashboardFirstBottomGraph />
       {/* <DashboardThirdBottomGraph /> */}
      </div>
  );
}

export default DashboardMainBottomGraph;

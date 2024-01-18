import React from 'react';
import PropTypes from 'prop-types';
import DashboardMainGraphs from './DashboardMainGraphs';
import DashboardSideGraphs from './DashboardSideGraphs';


// function to render the dashboard
function DashboardMain({userId}) {
  return (
    <div className='dashboardMain'>
      <DashboardMainGraphs userId={userId} />      
      <DashboardSideGraphs userId={userId} />
    </div>
  );
}

DashboardMain.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMain;
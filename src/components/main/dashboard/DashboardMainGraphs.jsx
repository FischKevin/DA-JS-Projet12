import React from 'react';
import PropTypes from 'prop-types';
import DashboardMainTopGraph from './DashboardMainTopGraph';
import DashboardMainBottomGraphs from './DashboardMainBottomGraphs';

// function to render the dashboard
function DashboardMainGraphs({userId}) {
  return (
    <>
      <div className='mainGraphs'>
        <DashboardMainTopGraph userId={userId} />
        <DashboardMainBottomGraphs userId={userId} />
      </div>
    </>
  );
}

DashboardMainGraphs.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMainGraphs;
import React from 'react';
import PropTypes from 'prop-types';
import DashboardFirstBottomGraph from './DashboardFirstBottomGraph';
import DashboardSecondBottomGraph from './DashboardSecondBottomGraph';
import DashboardThirdBottomGraph from './DashboardThirdBottomGraph';

function DashboardMainBottomGraph({userId}) {
  return (
      <div className='bottomGraphs'>
       <DashboardFirstBottomGraph userId={userId} />
       <DashboardSecondBottomGraph userId={userId} />
       <DashboardThirdBottomGraph userId={userId} />
      </div>
  );
}

DashboardMainBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardMainBottomGraph;

import React from 'react';
import mockData from '/src/mockData.json';

const userInfos = mockData["12"].userInfo.userInfos;

// function to render the dashboard header
function DashboardHeader() {
  return (
    <div className='dashboardHeader'>
      <h1>Bonjour <span className='firstName'>{userInfos.firstName}</span></h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}

export default DashboardHeader;
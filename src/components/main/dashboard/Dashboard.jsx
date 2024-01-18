import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import DashboardMain from './DashboardMain';

// function to render the dashboard
function Dashboard() {
  const { userId } = useParams(); // Récupère l'ID de l'utilisateur depuis l'URL
  return (
    <div className='dashboardContainer'>
      <DashboardHeader userId={userId} />
      <DashboardMain userId={userId} />
    </div>
  );
}

export default Dashboard;
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserData } from '/src/apiService';

function DashboardHeader({ userId }) {
  const [userInfos, setUserInfos] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(userId);
  
      if (data && data.data && data.data.userInfos) {
        setUserInfos(data.data.userInfos);
      }
    };
  
    fetchData();
  }, [userId]);
  

  if (!userInfos) {
    return <div>Chargement...</div>;
  }

  return (
    <div className='dashboardHeader'>
      <h1>Bonjour <span className='firstName'>{userInfos.firstName}</span></h1>
      <h2>Félicitations ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  );
}

DashboardHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardHeader;

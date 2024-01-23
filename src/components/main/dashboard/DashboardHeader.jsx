import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserDataModel } from '/src/services/userDataModel';
import { ApiDataService } from '/src/services/apiService';
import { MockDataService } from '/src/services/mockService';
import { useMockData } from '/src/config';

function DashboardHeader({ userId }) {
  const [userInfos, setUserInfos] = useState(null);

  useEffect(() => {
    const dataService = useMockData ? new MockDataService() : new ApiDataService();
    const userDataModel = new UserDataModel(dataService);

    const fetchData = async () => {
      try {
        const userData = await userDataModel.getUserInfo(userId);

        if (userData && userData.userInfos) {
          setUserInfos(userData.userInfos);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
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

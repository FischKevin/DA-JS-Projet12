import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserDataModel } from '/src/services/userDataModel';

function DashboardHeader({ userId }) {
  const [userInfos, setUserInfos] = useState(null);
  const userDataModel = new UserDataModel();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await userDataModel.getUserInfo(userId);

        if (userData && userData.userInfos) {
          setUserInfos(userData.userInfos);
        }
      } catch (error) {
        console.error('Error while fetching user infos:', error);
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

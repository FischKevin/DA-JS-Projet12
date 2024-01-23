import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { getUserData } from '/src/services/apiService';

import Calories from '/src/assets/icons/cards/calories.png';
import Proteines from '/src/assets/icons/cards/proteines.png';
import Glucides from '/src/assets/icons/cards/glucides.png';
import Lipides from '/src/assets/icons/cards/lipides.png';

function DashboardSideGraphs({ userId }) {
  const [keyData, setKeyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(userId);
      if (data && data.data && data.data.keyData) {
        setKeyData(data.data.keyData);
      }
    };

    fetchData();
  }, [userId]);

  const getBackgroundColor = (category) => {
    switch (category) {
      case "Calories":
        return "#FF0000";
      case "Protéines":
        return "#4AB8FF";
      case "Glucides":
        return "#F9CE23";
      case "Lipides":
        return "#FD5181";
      default:
        return "#FFFFFF";
    }
  };

  if (!keyData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sideDashboard">
      <Card
        imageUrl={Calories}
        data={`${keyData.calorieCount}kCal`}
        category="Calories"
        backgroundColor={getBackgroundColor("Calories")}
      />
      <Card
        imageUrl={Proteines}
        data={`${keyData.proteinCount}g`}
        category="Protéines"
        backgroundColor={getBackgroundColor("Protéines")}
      />
      <Card
        imageUrl={Glucides}
        data={`${keyData.carbohydrateCount}g`}
        category="Glucides"
        backgroundColor={getBackgroundColor("Glucides")}
      />
      <Card
        imageUrl={Lipides}
        data={`${keyData.lipidCount}g`}
        category="Lipides"
        backgroundColor={getBackgroundColor("Lipides")}
      />
    </div>
  );
}

DashboardSideGraphs.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardSideGraphs;

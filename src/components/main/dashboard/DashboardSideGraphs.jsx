import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { getUserData } from '/src/apiService';

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
        imageUrl="/src/assets/icons/cards/calories.png"
        data={`${keyData.calorieCount}kCal`}
        category="Calories"
        backgroundColor={getBackgroundColor("Calories")}
      />
      <Card
        imageUrl="/src/assets/icons/cards/proteines.png"
        data={`${keyData.proteinCount}g`}
        category="Protéines"
        backgroundColor={getBackgroundColor("Protéines")}
      />
      <Card
        imageUrl="/src/assets/icons/cards/glucides.png"
        data={`${keyData.carbohydrateCount}g`}
        category="Glucides"
        backgroundColor={getBackgroundColor("Glucides")}
      />
      <Card
        imageUrl="/src/assets/icons/cards/lipides.png"
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

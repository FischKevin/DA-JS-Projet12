// Dashboard.jsx ou le composant parent où vous souhaitez afficher les cartes
import React from 'react';
import Card from './Card';
import mockData from '/src/mockData.json';

function DashboardSideGraphs() {
  const keyData = mockData["12"].userInfo.keyData;

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

export default DashboardSideGraphs;

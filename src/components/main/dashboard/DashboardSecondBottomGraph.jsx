import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Text } from 'recharts';
import { UserDataModel } from '/src/services/userDataModel';

function customedLabels({ payload, x, y, cx, cy, ...rest }) {
  const customStyle = {
    fontSize: 12,
  };
  return (
    <Text
      {...rest}
      verticalAnchor='middle'
      y={y + (y - cy) / 10}
      x={x + (x - cx) / 10}
      style={{ ...rest, ...customStyle }}
    >
      {payload.value}
    </Text>
  );
}

function DashboardSecondBottomGraph({ userId }) {
  const [performanceData, setPerformanceData] = useState([]);
  const userDataModel = new UserDataModel();

  useEffect(() => {
    const fetchData = async () => {
      const data = await userDataModel.getUserPerformance(userId);
      if (data && data.data && data.data.data) {
        const formattedData = data.data.data.map(item => {
          const categoryName = data.data.kind[item.kind.toString()];
          return {
            category: categoryTranslations[categoryName] || categoryName,
            value: item.value
          };
        });

        setPerformanceData(formattedData);
      }
    };

    fetchData();
  }, [userId]);

  const categoryTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };

  const orderedCategories = ["Intensité", "Vitesse", "Force", "Endurance", "Énergie", "Cardio"];
  performanceData.sort((a, b) => orderedCategories.indexOf(a.category) - orderedCategories.indexOf(b.category));

  return (
      <ResponsiveContainer className="secondBottomGraph" width="100%" height={263}>
        <RadarChart outerRadius={80} data={performanceData}  >
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis 
            dataKey="category" 
            stroke="#fff" 
            fontSize={12} 
            tickLine={false} 
            tickMargin={30}
            tick={(props) => customedLabels(props)}
          />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  );
}

DashboardSecondBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardSecondBottomGraph;
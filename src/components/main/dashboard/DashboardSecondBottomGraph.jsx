import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Text } from 'recharts';
import mockData from '/src/mockData.json';

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

function DashboardSecondBottomGraph() {
  const categoryTranslations = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };

  const performanceData = mockData["12"].performance.data.map(item => {
    const categoryName = mockData["12"].performance.kind[item.kind.toString()];
    return {
      category: categoryTranslations[categoryName],
      value: item.value
    };
  });

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
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} stroke="transparent" />
          <Radar name="Performance" dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
  );
}

export default DashboardSecondBottomGraph;
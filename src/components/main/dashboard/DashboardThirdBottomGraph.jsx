import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import mockData from '/src/mockData.json';

function DashboardThirdBottomGraph() {
// Données mockées pour le graphique
const todayScore = mockData["12"].userInfo.todayScore;

// Création des données pour le graphique
const data = [{ name: 'Score', value: todayScore * 100, fill: '#FF0000' }];

return (
  <div className='thirdBottomGraph' style={{ background: '#FBFBFB' }}>
    <ResponsiveContainer width="100%" height={263}>
    
      <RadialBarChart
            innerRadius="70%"
            outerRadius="80%"
            data={data}
            startAngle={180}
            endAngle={-180}
            background={{ fill: '#FFFFFF' }}
          >
      <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
      <circle cx="50%" cy="50%" fill="#FFFFFF" r="32%"></circle>
      <RadialBar
       minAngle={15}
       clockWise
       dataKey="value"
       cornerRadius={20}
       background={{ fill: '#FBFBFB' }}
      />
      <text
        x="19%"
        y="12%"
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: '15px', fontWeight: '700', fill: '#000' }}
      >
        Score
      </text>
      <text
      x="50%"
      y="45%"
      textAnchor="middle"
      dominantBaseline="middle"
      style={{ fontSize: '26px', fontWeight: '700', fill: '#282D30' }}
      >
      {`${data[0].value.toFixed(0)}%`}
      </text>
      <text
      x="50%"
      y="56%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="goal"
      style={{ fontSize: '16px', fontWeight: '500', fill: '#74798C' }}
      >
      de votre
      </text>
      <text
      x="50%"
      y="65%"
      textAnchor="middle"
      dominantBaseline="middle"
      className="goal"
      style={{ fontSize: '16px', fontWeight: '500', fill: '#74798C' }}
      >
      objectif
      </text>
      </RadialBarChart>
    </ResponsiveContainer>
  </div>
  );
}

export default DashboardThirdBottomGraph;

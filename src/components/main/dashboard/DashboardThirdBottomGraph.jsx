import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { getUserData } from '/src/services/apiService';

function DashboardThirdBottomGraph({ userId }) {

  const [userScore, setUserScore] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserData(userId);
      if (data && data.data) {
        const score = data.data.score || data.data.todayScore;
        setUserScore(score * 100);
      }
    };

    fetchData();
  }, [userId]);

// Create the data for the graph
const data = userScore ? [{ name: 'Score', value: userScore, fill: '#FF0000' }] : [];

const displayScore = data.length > 0 ? `${data[0].value.toFixed(0)}%` : "0%";

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
      {displayScore}
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

DashboardThirdBottomGraph.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default DashboardThirdBottomGraph;

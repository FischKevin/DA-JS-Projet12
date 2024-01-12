import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import mockData from '/src/mockData.json';

// Get mocked data
const averageSessionsData = mockData["12"].averageSessions.sessions.map(session => {
  const daysOfWeek = ["L", "M", "Me", "J", "V", "S", "D"];
  return {
    day: daysOfWeek[session.day - 1],
    sessionLength: session.sessionLength
  };
});

// Define the custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length && label !== 'Start' && label !== 'End') {
    return (
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '5px', border: '1px solid #ccc' }}>
        {`${payload[0].value} min`}
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
  })),
  label: PropTypes.string,
};

// Define the custom tick
const CustomTick = (props) => {
  const { x, y, payload, index } = props;
  return (
    <g transform={`translate(${x},${y+5})`}>
      <text 
        x={0} 
        y={0} 
        dy={16} 
        textAnchor="middle" 
        fill="#fff" 
        opacity={0.5} 
        fontSize="12px" 
        fontWeight="500"
        key={`tick-${payload.value}-${index}`}> 
        {payload.value}
      </text>
    </g>
  );
};

CustomTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.object,
  index: PropTypes.number,
};

// Define the custom cursor
const CustomCursor = (props) => {
  const { points, width, height} = props;
  const { x, y } = points[0];
  return (
    <Rectangle fill="#000000" opacity={0.1} x={x} y={y - 48} width={width + 48} height={height + 100} />
  );
};

CustomCursor.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })),
  width: PropTypes.number,
  height: PropTypes.number,
};

// Define the custom active dot
const CustomActiveDot = (props) => {
  if (props.payload.day === 'Start' || props.payload.day === 'End') {
    // Nothing to display for the fictive points
    return null;
  }
  // Show a blue dot for the other points
  return <circle cx={props.cx} cy={props.cy} r={4} stroke="blue" fill="white" />;
};

CustomActiveDot.propTypes = {
  payload: PropTypes.object,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

function DashboardFirstBottomGraph() {
  const daysOfWeek = ["L", "M", "Me", "J", "V", "S", "D"];
  // Modify the data to add fictive points at the beginning and the end
  const averageSessionsDataWithPadding = [
    { day: 'Start', sessionLength: 0 }, // Fictive point to start
    ...averageSessionsData,
    { day: 'End', sessionLength: 0 }, // Fictive point to end
  ];

  // Define the custom tick formatter
  const customTickFormatter = (value) => {
    if (value === 'Start' || value === 'End') {
      return '';
    }
    return value;
  };

  return (
    <div className='firstBottomGraph'>
      <ResponsiveContainer width="100%" height={263}>
      <AreaChart data={averageSessionsDataWithPadding} margin={{ top: 50, right: 0, left: 0, bottom: 25 }}>
          <text x="35%" y="40" textAnchor="middle" fill="#fff" fontSize={15} fontWeight="500" opacity={0.5}>
            Durée moyenne <tspan x="31%" dy="20">des sessions</tspan>
          </text>
          <XAxis 
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={<CustomTick />}
            tickFormatter={customTickFormatter}
            ticks={daysOfWeek}
            interval={0}
            scale="point"
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <defs>
            <linearGradient id="strokeGradient" x1="0" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#strokeGradient)"
            strokeWidth={2}
            fillOpacity={0}
            activeDot={<CustomActiveDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}


export default DashboardFirstBottomGraph;

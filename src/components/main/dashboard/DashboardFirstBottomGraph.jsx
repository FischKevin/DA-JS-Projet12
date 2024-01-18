import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import mockData from '/src/mockData.json';

function DashboardFirstBottomGraph() {

// Convert a day number to a day name
const daysTranslations = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D"
};

// Get mocked data
const averageSessionsData = Object.values(mockData["12"].averageSessions.sessions).map(session => {
  return {
    dayNumber: session.day,
    sessionLength: session.sessionLength
  };
});

// Get the first and last values to add fictive points
const LValue = mockData["12"].averageSessions.sessions.find(session => session.day === 1).sessionLength;
const DValue = mockData["12"].averageSessions.sessions.find(session => session.day === 7).sessionLength;

const averageSessionsDataWithPadding = [
  { dayNumber: 'Start', sessionLength: LValue },
  ...averageSessionsData,
  { dayNumber: 'End', sessionLength: DValue }
];

// Define the custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length && label !== 'Start' && label !== 'End') {
    return (
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '5px', border: '1px solid #ccc', fontSize:'10px', fontWeigh:'500' }}>
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
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

// Define the custom tick
const CustomTick = (props) => {
  const { x, y, payload } = props;
  const dayName = daysTranslations[payload.value] || ''; 
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
        >  
        {dayName}
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
  // Check if the dot is the fictive point
  if (props.payload.dayNumber === 'Start' || props.payload.dayNumber === 'End') {
    return null;
  }

  return <circle cx={props.cx} cy={props.cy} r={4} stroke="blue" fill="white" />;
};

CustomActiveDot.propTypes = {
  payload: PropTypes.object,
  cx: PropTypes.number,
  cy: PropTypes.number,
};

// Define the custom tick formatter
const formatTick = (tickItem) => {
  return daysTranslations[tickItem] || '';
  };


  return (
      <ResponsiveContainer className="firstBottomGraph" width="1%" height={263}>
        <AreaChart data={averageSessionsDataWithPadding} margin={{ top: 50, right: -15, left: -15, bottom: 25 }}>
            <text x="35%" y="40" textAnchor="middle" fill="#fff" fontSize={15} fontWeight="500" opacity={0.5}>
              Durée moyenne <tspan x="31%" dy="20">des sessions</tspan>
            </text>
            <XAxis 
              dataKey="dayNumber"
              axisLine={false}
              tickLine={false}
              tick={<CustomTick />}
              tickFormatter={formatTick}
              ticks={[1, 2, 3, 4, 5, 6, 7]}
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
              strokeWidth={3}
              fillOpacity={0}
              activeDot={<CustomActiveDot />}
            />
        </AreaChart>
      </ResponsiveContainer>
  );
}


export default DashboardFirstBottomGraph;

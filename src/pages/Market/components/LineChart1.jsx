'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';

const salesData = [
  {
    name: 'Jan',
    
    
  },
  {
    name: 'Feb',
   
  },
  {
    name: 'Mar',
    revenue: 10
  },
  {
    name: 'Apr',
    
  },
  {
    name: 'May',
    
  },
  {
    name: 'Jun',
    
  },
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={salesData}
        margin={{
          top: 20,
          right: 30,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name">
          <Label
            value="Time"
            position="bottom"
            offset={-10}
            style={{ fill: '#ffffff', fontWeight: 'bold', fontSize: '12px'}}
          />
        </XAxis>
        <YAxis>
          <Label
            value="Volume (in Thousands)"
            angle={-90}
            position="insideLeft"
            style={{ fill: '#ffffff', fontWeight: 'bold',  fontSize: '12px'}}
          />
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
        <Line type="monotone" dataKey="profit" stroke="#8b5cf6" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Revenue:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Profit:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

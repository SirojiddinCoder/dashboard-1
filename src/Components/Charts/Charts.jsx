import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'undefined', value: 100 },
];

const COLORS = ['#FF4F64'];

const Charts = () => {
  return (
    <div style={{ textAlign: 'center' }} className='container'>
      <h3>Xarajatlar kategoriyasi bo'yicha taqsimot</h3>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%" 
          cy="50%"
          labelLine={false}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Charts;

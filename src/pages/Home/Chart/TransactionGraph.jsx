import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJs,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
} from 'chart.js';
import { lineData } from './data/data';

ChartJs.register(
  LinearScale, 
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip
);

const TransactionGraph = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, // allows height control
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: { enabled: true }
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true }
    }
  };

  return (
    <div className="w-full h-64 md:h-80 bg-gradient-to-r from-[#C2A1FD] to-[#9154FD] "> 
      <Line options={options} data={lineData} />
    </div>
  );
};

export default TransactionGraph;

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { barChart } from './data/data';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
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
    <div className="bg-gradient-to-r from-[#C2A1FD] to-[#9154FD] w-full h-64 md:h-80 p-4 rounded-lg shadow">
      <Bar options={options} data={barChart} />
    </div>
  );
};

export default DashboardChart;

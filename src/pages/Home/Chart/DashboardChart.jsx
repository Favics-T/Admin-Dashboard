// DashboardChart.jsx
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
    maintainAspectRatio: false, // ✅ lets it stretch naturally
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
    <div className="bg-gradient-to-r from-[#C2A1FD] to-[#9154FD] 
      w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] 
      p-4 rounded-lg shadow">
      {/* ✅ Now chart fills height dynamically */}
      <Bar options={options} data={barChart} />
    </div>
  );
};

export default DashboardChart;

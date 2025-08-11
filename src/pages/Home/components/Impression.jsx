
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const Impression = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      {
        label: 'Impressions',
        data: [22, 3, 18, 5],
        backgroundColor: ['#C4A1FD', '#C4A1FD', '#9154FD', '#C4A1FD'],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false, ticks: { stepSize: 5 } },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      <h2 className="text-sm font-semibold mb-4">Impression</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Impression;

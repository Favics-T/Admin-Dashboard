import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import Card from '../../../components/Card';

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
    maintainAspectRatio: false, // Allow full height usage
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: false, ticks: { stepSize: 5 } },
    },
  };

  return (
    <div className=" ">
      <Card>
        <div className="p-4 h-64"> 
          <h2 className="text-sm font-semibold mb-4">Impression</h2>
          <div className="h-full"> 
            <Bar data={data} options={options} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Impression;

import { useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const labels = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
const seedData = [12, 18, 15, 22, 20, 26, 24];

const nextValue = (value) => {
  const delta = Math.floor(Math.random() * 7) - 3;
  return Math.max(4, value + delta);
};

const Impression = () => {
  const [points, setPoints] = useState(seedData);

  useEffect(() => {
    const timer = setInterval(() => {
      setPoints((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        updated.shift();
        updated.push(nextValue(last));
        return updated;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Live impressions",
          data: points,
          borderColor: "#9154FD",
          backgroundColor: "rgba(145, 84, 253, 0.2)",
          borderWidth: 2,
          pointRadius: 2,
          tension: 0.35,
          fill: true,
        },
      ],
    }),
    [points]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: { grid: { display: false } },
        y: { beginAtZero: true, ticks: { stepSize: 5 } },
      },
      animation: { duration: 350 },
    }),
    []
  );

  return (
    <div className="h-44 rounded-xl bg-white p-3 shadow-sm">
      <p className="mb-2 text-sm font-semibold text-[#3A3541]">Live Impressions</p>
      <div className="h-[140px]">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default Impression;

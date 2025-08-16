
import { LineChart, Line, ResponsiveContainer } from "recharts";

const StatCard = ({ title, value, percentageChange, isIncrease, chartData, color }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col gap-2 w-full">
      {/* Chart */}
      <div className="h-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-semibold">{value}</p>
        <span
          className={`text-sm font-medium ${
            isIncrease ? "text-green-500" : "text-red-500"
          }`}
        >
          {isIncrease ? "+" : "-"}
          {percentageChange}%
        </span>
      </div>

      {/* Title */}
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
};

export default StatCard;


import { LineChart, Line, ResponsiveContainer } from "recharts";

const Payout = ({  chartData, color }) => {
  return (
    <div className=" w-full">
      {/* Chart */}
      <div className="h-10">
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
    </div>
  );
};

export default Payout;

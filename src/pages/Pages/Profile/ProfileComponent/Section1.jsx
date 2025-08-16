
import StatCard from "./StatCard";

const Section1 = () => {
  const likesData = [
    { value: 100 }, { value: 200 }, { value: 150 }, { value: 300 }, { value: 250 }
  ];
  const commentsData = [
    { value: 30 }, { value: 50 }, { value: 70 }, { value: 90 }, { value: 120 }
  ];
  const engagementData = [
    { value: 10 }, { value: 20 }, { value: 15 }, { value: 25 }, { value: 23 }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatCard
        title="Average Likes"
        value={635}
        percentageChange={21.01}
        isIncrease={true}
        chartData={likesData}
        color="#8B5CF6" 
      />

      <StatCard
        title="Comments Received"
        value={123}
        percentageChange={39.79}
        isIncrease={true}
        chartData={commentsData}
        color="#22C55E" 
      />

      <StatCard
        title="Avg. Engagement Rate"
        value="23%"
        percentageChange={7.5}
        isIncrease={false}
        chartData={engagementData}
        color="#3B82F6" 
      />
    </div>
  );
};

export default Section1;

const TalentCard = ({ talent }) => {
  return (
    <div className="p-4  rounded-lg shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold text-lg">{talent.name}</h3>
      <p className="text-gray-600">{talent.role}</p>
    </div>
  );
};

export default TalentCard;

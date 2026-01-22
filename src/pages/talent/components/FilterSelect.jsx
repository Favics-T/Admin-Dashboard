const FilterSelect = ({ label, value, options, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full md:w-64">
      <label className="text-sm text-gray-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">All</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSelect;

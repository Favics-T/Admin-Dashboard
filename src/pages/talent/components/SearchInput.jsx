const SearchInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search talent..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-3  rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};

export default SearchInput;

const PillTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-lg text-sm font-medium transition border ${
      active
        ? "bg-violet-600 text-white border-violet-600 shadow-sm"
        : "bg-white text-gray-700 border-gray-200 hover:border-violet-300"
    }`}
    aria-pressed={active}
  >
    {label}
  </button>
);

export default PillTab
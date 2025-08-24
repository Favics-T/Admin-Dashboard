
const DateDivider = ({ label }) => (
  <div className="relative my-6">
    <div className="h-px bg-gray-200" />
    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-50 text-gray-400 text-xs px-3">
      {label}
    </span>
  </div>
);

export default DateDivider
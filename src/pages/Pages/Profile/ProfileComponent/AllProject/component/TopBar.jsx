import Image1 from "../../../asset/Image1.png";

const ACTIONS = [
  { label: "App", isPrimary: true },
  { label: "Messages", isPrimary: false },
  { label: "Settings", isPrimary: false },
];

const TopBar = () => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pb-6">
    {/* Profile */}
    <div className="flex items-center gap-3">
      <img src={Image1} alt="profile" className="w-10 h-10 rounded-full" />
      <div>
        <h2 className="font-semibold text-[#3A3541] text-base sm:text-lg">Sape Morch</h2>
        <p className="text-sm text-gray-500">Product Manager</p>
      </div>
    </div>

    {/* Buttons */}
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {ACTIONS.map(({ label, isPrimary }) => (
        <button
          key={label}
          type="button"
          className={`rounded-lg px-4 py-1 text-sm sm:text-base ${
            isPrimary ? "bg-[#6E39CB] text-white" : "border text-[#6E39CB]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
);

export default TopBar;

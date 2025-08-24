import Avatar from "../Avatar";

const ListItem = ({ person, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition focus:outline-none focus:ring-2 focus:ring-violet-400 ${
      active ? "bg-white shadow" : "hover:bg-white/70"
    }`}
    aria-current={active ? "true" : "false"}
  >
    <Avatar name={person.name} color={person.color} />
    <div className="flex-1 overflow-hidden">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900 truncate">
          {person.name}
        </p>
        <span className="text-xs text-gray-400 ml-2 shrink-0">
          {person.time}
        </span>
      </div>
      <p className="text-xs text-gray-500 truncate">{person.subtitle}</p>
    </div>
  </button>
);

export default ListItem
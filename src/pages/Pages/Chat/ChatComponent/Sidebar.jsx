import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { people } from "../data";
import ListItem from "./ListItem";

const Sidebar = ({
  onSelect,
  activeId,
  onToggleMobile,
  isMobileOpen,
}) => {
  return (
    <aside
      className={`bg-white rounded-2xl p-4 lg:p-5 lg:static fixed inset-y-0 left-0 w-72 sm:w-80 max-w-[90%] z-40 shadow-lg lg:shadow-md transition-transform
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-500">Mark David</p>
          <p className="text-xs text-gray-400">markdavid@gmail.com</p>
        </div>
        <button
          className="p-2 text-gray-400 hover:text-gray-600 lg:hidden"
          aria-label="Close"
          onClick={() => onToggleMobile(false)}
        >
          <HiOutlineDotsHorizontal />
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <FiSearch className="text-gray-400" />
          <input
            id="search"
            placeholder="Search"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>
      </div>

      <div className="space-y-1 overflow-y-auto max-h-[calc(100vh-220px)] pr-1">
        {people.map((p) => (
          <ListItem
            key={p.id}
            person={p}
            active={p.id === activeId}
            onClick={() => onSelect?.(p.id)}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar
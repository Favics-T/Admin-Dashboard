import { IoMdMore } from "react-icons/io";
import Avatar from "./Avatar";
import { getProjectIcon } from "./projectIconMap";

const ProjectCard = ({ project, teamImages }) => {
  const { title, desc, tasks, date, color, iconKey } = project;
  const Icon = getProjectIcon(iconKey);

  return (
    <div className="rounded-lg lato gap-6 p-4 text-[#89868D] shadow-lg hover:shadow-xl transition flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-start">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${color}`}>
            {Icon ? <Icon /> : <span className="h-2 w-2 rounded-full bg-current" aria-hidden="true" />}
          </div>
          <div>
            <h2 className="font-semibold text-[#3A3541] text-base sm:text-lg">{title}</h2>
            <div className="flex -space-x-2 mt-1">
              {teamImages.map((img, idx) => (
                <Avatar key={`${title}-${idx}`} src={img} index={idx} />
              ))}
            </div>
          </div>
        </div>
        <button type="button" aria-label="Open project options">
          <IoMdMore className="text-gray-400 cursor-pointer hover:text-gray-600" />
        </button>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base mt-3">{desc}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 border-t pt-3 mt-3">
        <span>{tasks} tasks</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ProjectCard;

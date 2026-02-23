import { useState } from "react";
import { projects as baseProjects } from "../../../../../data/lists";
import { images as teamImages } from "../../asset/images";
import TopBar from "./component/TopBar";
import ProjectCard from "./component/ProjectCard";

const formatCurrentDate = () =>
  new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })
    .format(new Date())
    .replace(/\//g, ".");

const AllProjects = () => {
  const [projectItems, setProjectItems] = useState(baseProjects);
  const [draftProject, setDraftProject] = useState({ title: "", desc: "" });

  const addProject = () => {
    const title = draftProject.title.trim();
    if (!title) return;

    const description = draftProject.desc.trim() || "No description provided yet.";
    const latestId = projectItems.length ? Math.max(...projectItems.map((item) => item.id)) : 0;

    setProjectItems((prev) => [
      ...prev,
      {
        id: latestId + 1,
        title,
        desc: description,
        tasks: 0,
        date: formatCurrentDate(),
        color: "bg-slate-100 text-slate-700",
      },
    ]);

    setDraftProject({ title: "", desc: "" });
  };

  return (
    <div className="min-h-screen rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-10">
      <TopBar />

      <div className="rounded-t-lg bg-[#E7E7F4] px-2 py-4 sm:px-4 sm:py-6">
        <h1 className="text-base font-semibold text-[#3A3541] sm:text-lg lg:text-xl">
          Some of Our Awesome Projects
        </h1>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {projectItems.map((project) => (
          <ProjectCard key={project.id} project={project} teamImages={teamImages} />
        ))}

        <div className="flex flex-col justify-center gap-3 rounded-lg border border-dashed p-4">
          <input
            type="text"
            value={draftProject.title}
            onChange={(event) =>
              setDraftProject((prev) => ({ ...prev, title: event.target.value }))
            }
            placeholder="Project title"
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6E39CB]"
          />
          <input
            type="text"
            value={draftProject.desc}
            onChange={(event) =>
              setDraftProject((prev) => ({ ...prev, desc: event.target.value }))
            }
            placeholder="Project description"
            className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6E39CB]"
          />
          <button
            type="button"
            onClick={addProject}
            className="rounded-md bg-[#6E39CB] px-3 py-2 text-sm font-medium text-white"
          >
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

import { useState } from "react";
import { projects as baseProjects } from "../../../../../data/lists";
import { images as teamImages } from "../../asset/images";
import TopBar from "./component/TopBar";
import ProjectCard from "./component/ProjectCard";
import SectionHeader from "./component/SectionHeader";
import AddProjectCard from "./component/AddProjectCard";

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
        iconKey: "slack",
      },
    ]);

    setDraftProject({ title: "", desc: "" });
  };

  const updateDraftProject = (field, value) => {
    setDraftProject((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-10">
      <TopBar />
      <SectionHeader title="Some of Our Awesome Projects" />

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {projectItems.map((project) => (
          <ProjectCard key={project.id} project={project} teamImages={teamImages} />
        ))}

        <AddProjectCard
          draftProject={draftProject}
          onDraftChange={updateDraftProject}
          onAddProject={addProject}
        />
      </div>
    </div>
  );
};

export default AllProjects;

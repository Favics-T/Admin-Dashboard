import { useEffect, useState } from "react";
import { projects as baseProjects } from "../../../../../data/lists";
import { projectsApi } from "../../../../../api/resources";
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
  const [projectItems, setProjectItems] = useState([]);
  const [draftProject, setDraftProject] = useState({ title: "", desc: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadProjects = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await projectsApi.list();
      if (!data.length) {
        const seeded = await Promise.all(baseProjects.map((item) => projectsApi.create(item)));
        setProjectItems(seeded);
      } else {
        setProjectItems(data);
      }
    } catch {
      setError("Unable to load projects. Ensure API server is running.");
      setProjectItems(baseProjects);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const addProject = async () => {
    const title = draftProject.title.trim();
    if (!title) return;

    const payload = {
      title,
      desc: draftProject.desc.trim() || "No description provided yet.",
      tasks: 0,
      date: formatCurrentDate(),
      color: "bg-slate-100 text-slate-700",
      iconKey: "slack",
    };

    try {
      const created = await projectsApi.create(payload);
      setProjectItems((prev) => [created, ...prev]);
      setDraftProject({ title: "", desc: "" });
    } catch {
      setError("Unable to create project.");
    }
  };

  const deleteProject = async (id) => {
    try {
      await projectsApi.remove(id);
      setProjectItems((prev) => prev.filter((project) => project.id !== id));
    } catch {
      setError("Unable to delete project.");
    }
  };

  const updateDraftProject = (field, value) => {
    setDraftProject((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen rounded-lg bg-white p-4 shadow-sm sm:p-6 lg:p-10">
      <TopBar />
      <SectionHeader title="Some of Our Awesome Projects" />
      {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
      {loading && <p className="mt-3 text-sm text-gray-500">Loading projects...</p>}

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            teamImages={teamImages}
            onDelete={deleteProject}
          />
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

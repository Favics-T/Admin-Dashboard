const inputClassName =
  "rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6E39CB]";

const AddProjectCard = ({ draftProject, onDraftChange, onAddProject }) => (
  <div className="flex flex-col justify-center gap-3 rounded-lg border border-dashed p-4">
    <input
      type="text"
      value={draftProject.title}
      onChange={(event) => onDraftChange("title", event.target.value)}
      placeholder="Project title"
      className={inputClassName}
    />
    <input
      type="text"
      value={draftProject.desc}
      onChange={(event) => onDraftChange("desc", event.target.value)}
      placeholder="Project description"
      className={inputClassName}
    />
    <button
      type="button"
      onClick={onAddProject}
      className="rounded-md bg-[#6E39CB] px-3 py-2 text-sm font-medium text-white"
    >
      Add Project
    </button>
  </div>
);

export default AddProjectCard;

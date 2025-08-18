import React from "react";

const projects = [
  {
    id: 1,
    title: "Design tools",
    desc: "Consistent UI provides. We constantly making updates and add new features.",
    tasks: 30,
    date: "17.02.22",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 2,
    title: "Premium Support",
    desc: "Pick a subscription that best fits your needs and get started.",
    tasks: 22,
    date: "09.02.22",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: 3,
    title: "Skit Bot",
    desc: "If something did fail (which it doesn’t!) we will fix it for free.",
    tasks: 13,
    date: "31.01.22",
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: 4,
    title: "Developer First",
    desc: "Our platform is built to be simple for developers to use.",
    tasks: 23,
    date: "20.02.22",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 5,
    title: "Looking great",
    desc: "We have the UI specifically to play the game of life.",
    tasks: 30,
    date: "20.02.22",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 6,
    title: "Premium Support",
    desc: "Pick a subscription that best fits your needs and get started.",
    tasks: 32,
    date: "25.02.22",
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 7,
    title: "Looking great",
    desc: "We have the UI specifically to play the game of life.",
    tasks: 30,
    date: "20.02.22",
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: 8,
    title: "Design tools",
    desc: "Consistent UI provides. We constantly making updates and add new features.",
    tasks: 30,
    date: "03.02.22",
    color: "bg-pink-100 text-pink-600",
  },
];

const AllProjects = () => {
  return (
    <div className="bg-white pb-18 min-h-screen p-6 rounded-lg shadow-sm">
      {/* Top bar */}
      <div className="flex justify-between items-center pb-6 ">
        <div className="flex items-center gap-3">
          <img
            src=""
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-[#3A3541]">Sape Morch</h2>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-1 bg-[#6E39CB] text-white rounded-lg">App</button>
          <button className="px-4 py-1 border text-[#6E39CB] rounded-lg">Messages</button>
          <button className="px-4 py-1 border text-[#6E39CB] rounded-lg">Settings</button>
        </div>
      </div>

      {/* Section header */}
      <div className="py-6 bg-[#E7E7F4] rounded-t-lg px-2">
        <h1 className="text-lg font-semibold  text-[#3A3541]">
          Some of Our Awesome projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            {/* Badge */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 ${project.color}`}
            >
              {project.title.charAt(0)}
            </div>
            {/* Title & Desc */}
            <h2 className="font-semibold text-[#3A3541]">{project.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{project.desc}</p>
            {/* Footer */}
            <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
              <span>{project.tasks}</span>
              <span>{project.date}</span>
            </div>
          </div>
        ))}

        {/* New Project Card */}
        <div className="border border-dashed rounded-lg flex items-center justify-center text-gray-400 hover:text-[#7367F0] cursor-pointer">
          <p className="p-6">New project</p>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;

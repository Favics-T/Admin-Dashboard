import React from "react";
import Image1 from './asset/Image1.png';
import Image2 from './asset/Image2.png';
import Image3 from './asset/Image3.png';
import Image4 from './asset/Image4.png';
import Image5 from './asset/Image5.png';
import Image6 from './asset/Image6.png';
import { SiAdobeindesign, SiAdobephotoshop } from "react-icons/si";
import { IoMdMore } from "react-icons/io";
import { FaSlack } from "react-icons/fa";

const teamImages = [Image2, Image3, Image4, Image5, Image6];

// Avatar
const Avatar = ({ src, index }) => (
  <div className={`${index !== 0 ? '-ml-1' : ''} border-2 border-white rounded-full`}>
    <img className="h-8 w-8 rounded-full" src={src} alt="team" />
  </div>
);

// Project Card
const ProjectCard = ({ project, teamImages }) => {
  const { title, desc, tasks, date, color, icon } = project;

  return (
    <div className="rounded-lg lato gap-6 p-4 text-[#89868D] shadow-lg hover:shadow-xl transition flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between">
        <div className="flex gap-3 items-start">
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${color}`}>
            {icon}
          </div>
          <div>
            <h2 className="font-semibold text-[#3A3541] text-base sm:text-lg">{title}</h2>
            <div className="flex -space-x-2 mt-1">
              {teamImages.map((img, idx) => (
                <Avatar key={idx} src={img} index={idx} />
              ))}
            </div>
          </div>
        </div>
        <IoMdMore className="text-gray-400 cursor-pointer hover:text-gray-600" />
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

// TopBar
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
      <button className="px-4 py-1 bg-[#6E39CB] text-white rounded-lg text-sm sm:text-base">App</button>
      <button className="px-4 py-1 border text-[#6E39CB] rounded-lg text-sm sm:text-base">Messages</button>
      <button className="px-4 py-1 border text-[#6E39CB] rounded-lg text-sm sm:text-base">Settings</button>
    </div>
  </div>
);

// Main
const AllProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Design tools",
      desc: "Consistent UI provides. We constantly making updates and add new features.",
      tasks: 30,
      date: "17.02.22",
      color: "bg-pink-100 text-pink-600",
      icon: <SiAdobeindesign />,
    },
    {
      id: 2,
      title: "Premium Support",
      desc: "Pick a subscription that best fits your needs and get started.",
      tasks: 22,
      date: "09.02.22",
      color: "bg-[#E2F9FF] text-blue-500",
      icon: <SiAdobephotoshop />,
    },
    {
      id: 3,
      title: "Skit Bot",
      desc: "If something did fail (which it doesn’t!) we will fix it for free.",
      tasks: 13,
      date: "31.01.22",
      icon: <FaSlack />,
      color: "bg-pink-100 text-[#4A154B]",
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

  return (
    <div className="bg-white min-h-screen p-4 sm:p-6 lg:p-10 rounded-lg shadow-sm">
      <TopBar />

      {/* Section Header */}
      <div className="py-4 sm:py-6 bg-[#E7E7F4] rounded-t-lg px-2 sm:px-4">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-[#3A3541]">
          Some of Our Awesome Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} teamImages={teamImages} />
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

import React from "react";
import {
  FaArrowUp,
  FaMobileAlt,
  FaServer,
  FaCreditCard,
  FaUnlock,
  FaEnvelope,
} from "react-icons/fa";

const events = [
  {
    icon: <FaArrowUp className="text-purple-500 text-lg" />,
    title: "$8900, Design changes",
    date: "10:20am",
    desc: "You’ve requested to withdraw this amount.",
    tags: ["Design"],
  },
  {
    icon: <FaMobileAlt className="text-sky-500 text-lg" />,
    title: "New order #1832412",
    date: "8:00am",
    desc: "New order has been placed successfully.",
    tags: ["ORDER", "#1234"],
  },
  {
    icon: <FaServer className="text-indigo-500 text-lg" />,
    title: "Server payments for April",
    date: "Yesterday",
    desc: "Server payment completed successfully.",
    tags: ["Server", "Payment"],
  },
  {
    icon: <FaCreditCard className="text-pink-500 text-lg" />,
    title: "New card added for order #4395133",
    date: "23 May 2023",
    desc: "New debit card added successfully.",
    tags: ["Card"],
  },
  {
    icon: <FaUnlock className="text-red-500 text-lg" />,
    title: "Unlock packages for development",
    date: "22 May 2023",
    desc: "Development packages unlocked successfully.",
    tags: ["DevOps"],
  },
  {
    icon: <FaEnvelope className="text-green-500 text-lg" />,
    title: "New message unread",
    date: "20 May 2023",
    desc: "You have 5 unread messages.",
    tags: ["Message"],
  },
];

const TimelineCard = ({ dark }) => {
  return (
    <div
      className={`p-6 rounded-xl shadow-sm border w-full max-w-md ${
        dark ? "bg-[#2B2738] border-gray-700 text-white" : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <h2 className="font-semibold text-lg mb-6">Timeline with dotted line</h2>

      <div className="relative pl-8">
        {/* Dotted Line */}
        <div className="absolute left-2 top-0 h-full w-[2px] border-l-2 border-dotted border-gray-400"></div>

        {events.map((event, idx) => (
          <div key={idx} className="relative mb-8">
            {/* Icon */}
            <div className="absolute -left-[22px] bg-white dark:bg-[#2B2738] rounded-full p-1">
              {event.icon}
            </div>

            {/* Content */}
            <h3 className="font-medium">{event.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
            <p className="text-sm mt-1">{event.desc}</p>

            {/* Tags */}
            <div className="flex gap-2 mt-2 flex-wrap">
              {event.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20 w-full max-w-8xl">
        {/* Light Card */}
        <TimelineCard dark={false} />

        {/* Dark Card */}
        <TimelineCard dark={true} />
      </div>
    </div>
  );
};

export default Timeline;

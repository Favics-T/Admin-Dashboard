import React from "react";
import { CiUser, CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const faqList = [
  { icon: CiUser, desc: "Join Us", bgColor: "bg-[#0039BA]" },
  {
    icon: CiSearch,
    desc: "Bring your own talent pool or let us match your posts with the best ones",
    bgColor: "bg-[#23B1D3]",
  },
  {
    icon: FaPhoneAlt,
    desc: "Get in touch with the talents with just a few clicks without cold calls or emails",
    bgColor: "bg-[#934790]",
  },
];

const General = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">General Overview</h1>
        <p className="text-gray-500">Quick stats and information at a glance</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Total Users</h3>
          <p className="text-2xl font-bold text-gray-800">1,245</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Active Jobs</h3>
          <p className="text-2xl font-bold text-gray-800">58</p>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow">
          <h3 className="text-gray-500 text-sm">Messages</h3>
          <p className="text-2xl font-bold text-gray-800">320</p>
        </div>
      </div>

      {/* Recent Activity  */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Recent Activity
        </h2>
        <table className="w-full text-sm text-left">
          <thead className="text-gray-500 border-b">
            <tr>
              <th className="pb-2">User</th>
              <th className="pb-2">Action</th>
              <th className="pb-2">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="py-2">John Doe</td>
              <td className="py-2">Created Job Post</td>
              <td className="py-2">Aug 24, 2025</td>
            </tr>
            <tr>
              <td className="py-2">Jane Smith</td>
              <td className="py-2">Updated Profile</td>
              <td className="py-2">Aug 23, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* FAQ Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className={`${faq.bgColor} text-white p-5 rounded-2xl flex items-center gap-3 shadow`}
          >
            <faq.icon size={24} />
            <p className="text-sm">{faq.desc}</p>
          </div>
        ))}
      </div>

      {/* Announcements */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-2">
          Announcements
        </h2>
        <p className="text-gray-600">
          System maintenance scheduled for Sept 1st, 2025. Please save your work
          beforehand.
        </p>
      </div>
    </div>
  );
};

export default General;

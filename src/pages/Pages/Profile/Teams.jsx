import React from "react";

const AddTeam = () => {
  return (
    <div className="flex gap-2 items-center mb-3">
      <input
        type="email"
        placeholder="isomi@isom.com"
        className="flex-1 border rounded-md px-3 py-2 outline-none"
      />
      <select className="border rounded-md px-3 py-2 text-sm">
        <option>Read-only</option>
        <option>Editor</option>
        <option>Admin</option>
      </select>
    </div>
  );
};

const Teams = () => {
  const members = [
    { name: "Olisa Boye", role: "Admin" },
    { name: "Phoenix Baker", role: "Admin" },
    { name: "Lene Sretor", role: "Admin" },
    { name: "Deni Wikinson", role: "Admin" },
    { name: "Careke Wu", role: "Admin" },
  ];

  return (
    <div className="bg-white py-12 text-[#3A3541] w-full px-6 h-screen rounded-lg">
      {/* Team management */}
      <div className="border-b text-[#b8b5bd] pb-4">
        <h1 className="text-[#3A3541] text-2xl">Team management</h1>
        <p>Manage your team members and their account permission here</p>
      </div>

      {/* Invite team */}
      <div className="flex gap-6 text-[#b8b5bd] py-6">
        <div className="flex-[3] flex flex-col gap-1">
          <h1 className="Lato text-[22px] text-[#3A3541]">Invite team members</h1>
          <p>
            Get your projects up and running faster by inviting your team to collaborate.
          </p>
        </div>

        <div className="flex-[7] border rounded-md p-4">
          <AddTeam />
          <AddTeam />
          <AddTeam />
          <div className="flex justify-between items-center mt-4">
            <button className="text-sm text-[#7367F0] hover:underline">
              + Add another
            </button>
            <button className="bg-[#7367F0] text-white px-4 py-2 rounded-md">
              Send Invites
            </button>
          </div>
        </div>
      </div>

      {/* Team members */}
      <div className="pt-6">
        <h1 className="Lato text-[22px] text-[#3A3541] mb-4">Team members</h1>
        <div className="flex flex-col gap-3">
          {members.map((m, i) => (
            <div
              key={i}
              className="flex justify-between items-center border rounded-md px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  {m.name.charAt(0)}
                </div>
                <span>{m.name}</span>
              </div>
              <div className="flex gap-4 text-sm">
                <span className="text-[#3A3541]">{m.role}</span>
                <button className="text-[#EA5455]">Delete</button>
                <button className="text-[#7367F0]">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

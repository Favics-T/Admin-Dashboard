import React, { useState } from "react";

const InviteMember = ({ email, role, onChangeEmail, onChangeRole }) => (
  <div className="flex flex-col sm:flex-row gap-2 items-center mb-3">
    <input
      type="email"
      value={email}
      onChange={(e) => onChangeEmail(e.target.value)}
      placeholder="isomi@isom.com"
      className="flex-1 border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-[#7367F0] w-full"
    />
    <select
      value={role}
      onChange={(e) => onChangeRole(e.target.value)}
      className="border rounded-md px-3 py-2 text-sm w-full sm:w-auto"
    >
      <option>Read-only</option>
      <option>Editor</option>
      <option>Admin</option>
    </select>
  </div>
);

const TeamMember = ({ member, onDelete, onEdit }) => (
  <div className="flex flex-col sm:flex-row justify-between sm:items-center border rounded-md px-4 py-3 gap-2">
    {/* Name */}
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-white">
        {member.name.charAt(0)}
      </div>
      <span className="text-[#3A3541]">{member.name}</span>
    </div>

    {/* Role & Actions */}
    <div className="flex flex-wrap gap-3 text-sm">
      <span className="text-[#3A3541]">{member.role}</span>
      <button className="text-red-500 hover:underline" onClick={onDelete}>
        Delete
      </button>
      <button className="text-[#7367F0] hover:underline" onClick={onEdit}>
        Edit
      </button>
    </div>
  </div>
);

const Teams = () => {
  const [invites, setInvites] = useState([
    { email: "", role: "Read-only" },
    { email: "", role: "Read-only" },
    { email: "", role: "Read-only" },
  ]);

  const [members, setMembers] = useState([
    { name: "Olisa Boye", role: "Admin" },
    { name: "Phoenix Baker", role: "Admin" },
    { name: "Lene Sretor", role: "Admin" },
    { name: "Deni Wikinson", role: "Admin" },
    { name: "Careke Wu", role: "Admin" },
  ]);

  const handleInviteChange = (index, field, value) => {
    const newInvites = [...invites];
    newInvites[index][field] = value;
    setInvites(newInvites);
  };

  const addInvite = () =>
    setInvites([...invites, { email: "", role: "Read-only" }]);

  const sendInvites = () => {
    console.log("Invites sent:", invites);
  };

  const deleteMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const editMember = (index) => {
    console.log("Edit member at index:", index);
  };

  return (
    <div className="bg-white py-8 sm:py-12 text-[#3A3541] w-full px-4 sm:px-6 lg:px-12 rounded-lg">
      {/* Team Management Header */}
      <div className="border-b text-[#b8b5bd] pb-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-[#3A3541]">
          Team management
        </h1>
        <p className="text-sm sm:text-base">
          Manage your team members and their account permission here
        </p>
      </div>

      {/* Invite Team */}
      <div className="flex flex-col lg:flex-row gap-6 border-b text-[#b8b5bd] py-6">
        <div className="flex-1 flex flex-col gap-1">
          <h2 className="text-lg sm:text-[22px] font-semibold text-[#3A3541]">
            Invite team members
          </h2>
          <p className="text-sm sm:text-base">
            Get your projects up and running faster by inviting your team to
            collaborate.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4 p-2 sm:p-4">
          <div className="flex flex-col gap-4">
            {invites.map((invite, idx) => (
              <InviteMember
                key={idx}
                email={invite.email}
                role={invite.role}
                onChangeEmail={(val) => handleInviteChange(idx, "email", val)}
                onChangeRole={(val) => handleInviteChange(idx, "role", val)}
              />
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
            <button
              className="text-sm text-[#7367F0] hover:underline"
              onClick={addInvite}
            >
              + Add another
            </button>
            <button
              className="bg-[#7367F0] text-white px-4 py-2 rounded-md w-full sm:w-auto"
              onClick={sendInvites}
            >
              Send Invites
            </button>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="pt-6 border-b py-8 text-gray-400">
        <h2 className="text-lg sm:text-[22px] font-semibold text-[#3A3541] mb-4">
          Team members
        </h2>
        <div className="flex flex-col gap-3">
          {members.map((member, idx) => (
            <TeamMember
              key={idx}
              member={member}
              onDelete={() => deleteMember(idx)}
              onEdit={() => editMember(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;

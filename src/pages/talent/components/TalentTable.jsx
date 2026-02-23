const SortIcon = ({ active, order }) => {
  if (!active) return <span className="ml-1 text-gray-400">↕</span>;
  return <span className="ml-1 font-bold">{order === "asc" ? "↑" : "↓"}</span>;
};

const TalentTable = ({ talents, sortBy, order, onSort }) => {
  if (!talents.length) {
    return <p className="mt-6 rounded-lg border border-dashed p-4 text-sm text-gray-500">No talents found.</p>;
  }

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full rounded-lg border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="cursor-pointer p-3 text-left" onClick={() => onSort("name")}>
              Name
              <SortIcon active={sortBy === "name"} order={order} />
            </th>
            <th className="cursor-pointer p-3 text-left" onClick={() => onSort("role")}>
              Role
              <SortIcon active={sortBy === "role"} order={order} />
            </th>
            <th className="p-3 text-left">Location</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {talents.map((talent) => (
            <tr key={talent.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{talent.name}</td>
              <td className="p-3">{talent.role}</td>
              <td className="p-3">{talent.location}</td>
              <td className="p-3 capitalize">{talent.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TalentTable;


const SortIcon = ({ active, order }) => {
  if (!active) return <span className="ml-1 text-gray-400">⇅</span>;
  return (
    <span className="ml-1 font-bold">
      {order === 'asc' ? '↑' : '↓'}
    </span>
  );
};

const TalentTable = ({ talents, sortBy, order, onSort }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort('name')}
            >
              Name
              <SortIcon active={sortBy === 'name'} order={order} />
            </th>

            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => onSort('role')}
            >
              Role
              <SortIcon active={sortBy === 'role'} order={order} />
            </th>
          </tr>
        </thead>

        <tbody>
          {talents.map((talent) => (
            <tr
              key={talent.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-3">{talent.name}</td>
              <td className="p-3">{talent.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TalentTable;

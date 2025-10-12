import React from "react";

export default function DataTable({ columns, data }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 border-b text-gray-600 font-medium">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-6 py-4 whitespace-nowrap"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`hover:bg-gray-50 transition ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <td className="px-6 py-4 flex items-center gap-3 whitespace-nowrap">
                <img
                  src={row.avatar}
                  alt={row.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-900">{row.name}</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{row.position}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.office}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.salary}</td>
              <td className="px-6 py-4 whitespace-nowrap">{row.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
import Avatar from "./Avatar";

export default function TableRow({ row }) {
  return (
    <tr
      className="bg-white rounded-lg shadow-sm overflow-hidden"
      tabIndex={0}
      aria-label={`${row.name} - ${row.position}`}
    >
      <td className="pl-6 pr-4 py-4 align-middle whitespace-nowrap">
        <div className="flex items-center gap-3">
          <Avatar src={row.avatar} alt={`Avatar of ${row.name}`} />
          <div>
            <div className="text-sm font-medium text-gray-800">{row.name}</div>
            <div className="text-xs text-muted">{row.position}</div>
          </div>
        </div>
      </td>

      <td className="py-4 align-middle">
        <div className="text-sm text-gray-800 hidden md:block">{row.position}</div>
        <div className="text-xs text-muted md:hidden">{row.position}</div>
      </td>

      <td className="py-4 align-middle text-sm text-gray-700">{row.age}</td>

      <td className="py-4 align-middle text-sm text-gray-700">{row.office}</td>

      <td className="py-4 align-middle text-sm font-medium">{row.salary}</td>

      <td className="py-4 pr-6 align-middle text-sm text-muted">{row.startDate}</td>
    </tr>
  );
}

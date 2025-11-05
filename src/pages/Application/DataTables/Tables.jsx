import React from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";


export default function Table({ rows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className="min-w-[760px] w-full table-auto text-left"
        role="table"
        aria-label="Employees"
      >
        <TableHeader />
        <tbody className="space-y-3">
          {rows.map((r) => (
            <TableRow key={r.id} row={r} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

import React from "react";

export default function TableHeader() {
  
  return (
    <thead>
      <tr className="text-left text-sm text-muted">
        <th className="pl-6 py-3">Name</th>
        <th className="py-3">Position</th>
        <th className="py-3">Age</th>
        <th className="py-3">Office</th>
        <th className="py-3">Salary</th>
        <th className="py-3 pr-6">Start date</th>
      </tr>
    </thead>
  );
}

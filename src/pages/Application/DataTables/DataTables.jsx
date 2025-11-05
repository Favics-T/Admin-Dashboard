import React from "react";
import Table from "./Tables";
import { rows } from "./sampleRows";

export default function DataTables() {
  return (
    <div className="min-h-screen bg-row p-6 md:p-10 font-sans">
      <main className="max-w-7xl mx-auto">
       

        <section aria-labelledby="employee-table">
          <div className="bg-white rounded-lg shadow-[0_1px_0_rgba(0,0,0,0.02)] p-4 md:p-6">
            <div id="employee-table" className="sr-only">Employee table</div>
            <Table rows={rows} />
          </div>
        </section>
      </main>
    </div>
  );
}

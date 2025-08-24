import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const NewProject = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-8">
      <div className="bg-white rounded-xl shadow p-6 md:p-10 w-full max-w-3xl flex flex-col gap-6">
        {/* subheader */}
        <div>
          <h1 className="subHeader">New Project</h1>
          <p className="mini">Create new project</p>
        </div>

        {/* form */}
        <div className="flex flex-col gap-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Project Name" />
            <Input label="Project Title" />
          </div>
          <Input label="Project Tags" />

          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Start Date" type="date" />
            <Input label="End Date" type="date" />
          </div>
        </div>

        {/* file upload */}
        <div className="bg-gray-100 flex flex-col gap-4 w-full p-6 rounded border border-dashed border-gray-400 items-center justify-center text-center cursor-pointer hover:bg-gray-50 transition">
          <input type="file" className="hidden" id="file-upload" />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-gray-600">
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-sm text-gray-500">
                SVG, PNG, JPG or GIF (max, 800x400px)
              </p>
            </div>
          </label>
        </div>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end">
          <button className="purple border rounded-lg px-6 py-2">Cancel</button>
          <Button label="Create project" />
        </div>
      </div>
    </div>
  );
};

export default NewProject;

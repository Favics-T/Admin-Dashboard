import React, { useContext } from "react";
import { WizardContext } from "../../../../Context/WizardContext";

const hobbiesList = [
  "Design",
  "Develop",
  "Code",
  "Draw",
  "Read",
  "Dance",
  "Sing",
  "Write",
  "Cook",
];

export default function Account() {
  const { form, handleCheckbox, nextStep, prevStep } =
    useContext(WizardContext);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6">
      <header className="text-center">
        <h1 className="text-xl font-semibold">What are your interests?</h1>
        <p className="text-gray-500 text-sm">
          Choose what you enjoy doing in your free time.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-4">
        {hobbiesList.map((hobby) => (
          <label
            key={hobby}
            className={`p-4 border rounded-lg text-center cursor-pointer transition ${
              form.hobbies.includes(hobby)
                ? "bg-[#6E39CB] text-white"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={form.hobbies.includes(hobby)}
              onChange={() => handleCheckbox(hobby)}
              className="hidden"
            />
            {hobby}
          </label>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 rounded-lg border text-gray-700"
        >
          Back
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="px-5 py-2 rounded-lg bg-[#6E39CB] text-white font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
}

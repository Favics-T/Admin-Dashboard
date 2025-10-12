import React, { useContext } from "react";
import AboutInput from "../ui/AboutInput";
import { WizardContext } from "../../../../Context/WizardContext";

export default function Address() {
  const { form, handleChange, handleSubmit, prevStep, error } =
    useContext(WizardContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm space-y-6"
    >
      <header>
        <h1 className="text-xl font-semibold">Where do you live?</h1>
        <p className="text-gray-500 text-sm">
          Fill out your address details to complete your profile.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-4">
        <AboutInput
          id="streetName"
          label="Street Name"
          value={form.streetName}
          onChange={handleChange}
          placeholder="Broad Street"
        />
        <AboutInput
          id="streetNo"
          label="Street No"
          value={form.streetNo}
          onChange={handleChange}
          placeholder="197"
        />
        <AboutInput
          id="city"
          label="City"
          value={form.city}
          onChange={handleChange}
          placeholder="Lagos"
        />
        <AboutInput
          id="country"
          label="Country"
          value={form.country}
          onChange={handleChange}
          placeholder="Nigeria"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 rounded-lg border text-gray-700"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-5 py-2 rounded-lg bg-[#6E39CB] text-white font-medium"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

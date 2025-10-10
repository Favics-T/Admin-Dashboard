import React from "react";

 function AboutInput({
  id,
  label,
  type = "text",
  placeholder = "",
  required = false,
  value,
  onChange,
  autoComplete,
  ...rest
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-2">
        {label}{required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6E39CB] focus:border-transparent transition-shadow bg-white"
        {...rest}
      />
    </div>
  );
}
export default AboutInput

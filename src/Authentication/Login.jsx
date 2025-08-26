import React from "react";
import InputField from "./components/InputField";
import { useForm } from "../Context/UserContext";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { formData, updateForm } = useForm();
  const navigate = useNavigate();

  const inputFields = [
    { placeholder: "Enter your email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      navigate("/home");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="flex justify-center items-center w-full px-4 md:px-40 py-6 md:h-screen bg-gray-50">
      <div className="flex flex-col gap-8 w-full max-w-md bg-white p-6 md:p-10 rounded-lg shadow-md">
        
        {/* Title */}
        <div>
          <h1 className="Lato text-2xl md:text-3xl font-semibold">Welcome back</h1>
          <p className="text-sm text-[#89868D] mt-2">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={(e) => updateForm(field.name, e.target.value)}
            />
          ))}

          <Button
            label="Sign in"
            type="submit"
            style="bg-[#0039BA] text-white w-full"
          />
        </form>

        {/* Google login */}
        <Button
          label="Sign in with Google"
          style="bg-[#DECCFE] text-[#3A3541] w-full"
          onClick={() => alert("Google login coming soon...")}
        />

        {/* Signup link */}
        <p className="text-center text-sm">
          I don’t have an account.{" "}
          <Link to="/signup" className="text-[#6E39CB] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
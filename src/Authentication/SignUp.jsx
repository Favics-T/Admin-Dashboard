import React from "react";
import InputField from "./components/InputField";
import { useForm } from "../Context/UserContext";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { formData, updateForm } = useForm();
  const navigate = useNavigate();

  const inputFields = [
    { placeholder: "Name", name: "name", type: "text" },
    { placeholder: "E-mail Address", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
    { placeholder: "Company", name: "company", type: "text" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formData.name && formData.email && formData.password;

    if (isValid) {
      localStorage.setItem("registeredUser", JSON.stringify(formData));
      navigate("/home");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex px-4 md:px-40 py-6 w-full md:py-0 md:h-screen justify-center items-center">
      <div className="flex flex-col gap-6 w-full max-w-2xl bg-white md:shadow-none shadow-md p-6 md:p-0 rounded-lg">
        
        {/* Title */}
        <h1 className="Lato text-2xl font-semibold text-center md:text-left">
          Sign Up
        </h1>

        {/* Form */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col gap-4 w-full"
        >
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={(e) => updateForm(field.name, e.target.value)}
            />
          ))}

          <Button
            label="Sign up"
            type="submit"
            style="bg-[#6E39CB] text-white w-full"
          />
        </form>

        {/* Google signup */}
        <Button
          label="Sign up with Google"
          style="bg-[#DECCFE] text-[#3A3541] w-full"
          onClick={() => alert("Google sign-up coming soon...")}
        />

        {/* Login link */}
        <p className="text-center text-sm">
          I have an account.{" "}
          <Link to="/login" className="text-[#6E39CB] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

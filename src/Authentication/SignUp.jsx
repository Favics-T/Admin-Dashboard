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
    <div className="flex px-4 md:py-0.5 py-6 md:h-screen justify-center items-center">
      <div className="flex flex-col gap-8 w-96">
        <h1 className="Lato text-lg md:text-start text-center">Sign Up</h1>

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
            label="Sign up"
            type="submit"
            style="bg-[#6E39CB] text-white"
          />
        </form>

        <Button
          label="Sign up with Google"
          style="bg-[#DECCFE] text-[#3A3541]"
          onClick={() => alert("Google sign-up coming soon...")}
        />
        <Link to="/login">
          <p className="text-center hover:underline cursor-pointer">
            I have an account. <span>Sign in</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;

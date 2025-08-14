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
    <div className="flex px-4 md:h-screen justify-center items-center">
      <div className="flex flex-col gap-8 w-96">
        <div>
          <h1 className="Lato text-lg">Welcome back</h1>
          <p className="text-sm text-[#89868D] lato">
            Welcome back! Please enter your details.
          </p>
        </div>

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
            style="bg-[#0039BA] text-white"
          />
        </form>

        <Button
          label="Sign in with Google"
          style="bg-[#DECCFE] text-[#3A3541]"
          onClick={() => alert("Google login coming soon...")}
        />
        <Link to="/signup">
          <p className="text-center hover:underline cursor-pointer">
            I don’t have an account. <span>Sign up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;

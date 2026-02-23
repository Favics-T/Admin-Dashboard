import { Link, useNavigate } from "react-router-dom";
import InputField from "./components/InputField";
import Button from "../components/Button";
import { useForm } from "../Context/UserContext";
import { useAuth } from "../Context/AuthContext";

const SignUp = () => {
  const { formData, updateForm, resetForm } = useForm();
  const { register } = useAuth();
  const navigate = useNavigate();

  const inputFields = [
    { placeholder: "Name", name: "name", type: "text" },
    { placeholder: "E-mail Address", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
    { placeholder: "Company", name: "company", type: "text", required: false },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = register(formData);

    if (result.ok) {
      resetForm();
      navigate("/home", { replace: true });
      return;
    }

    alert(result.message);
  };

  return (
    <div className="flex w-full items-center justify-center px-4 py-6 md:h-screen md:px-40 md:py-0">
      <div className="flex w-full max-w-2xl flex-col gap-6 rounded-lg bg-white p-6 shadow-md md:p-0 md:shadow-none">
        <h1 className="Lato text-center text-2xl font-semibold md:text-left">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={(event) => updateForm(field.name, event.target.value)}
            />
          ))}

          <Button label="Sign up" type="submit" style="bg-[#6E39CB] text-white" />
        </form>

        <Button
          label="Sign up with Google"
          style="bg-[#DECCFE] text-[#3A3541]"
          onClick={() => alert("Google sign-up coming soon...")}
        />

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

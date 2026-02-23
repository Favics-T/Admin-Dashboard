import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "./components/InputField";
import Button from "../components/Button";
import { useForm } from "../Context/UserContext";
import { useAuth } from "../Context/AuthContext";

const Login = () => {
  const { formData, updateForm } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const inputFields = [
    { placeholder: "Enter your email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
  ];

  const redirectTo = location.state?.from ?? "/home";

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = login({ email: formData.email, password: formData.password });

    if (result.ok) {
      navigate(redirectTo, { replace: true });
      return;
    }

    alert(result.message);
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50 px-4 py-6 md:px-40">
      <div className="flex w-full max-w-md flex-col gap-8 rounded-lg bg-white p-6 shadow-md md:p-10">
        <div>
          <h1 className="Lato text-2xl font-semibold md:text-3xl">Welcome back</h1>
          <p className="mt-2 text-sm text-[#89868D]">Welcome back! Please enter your details.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          {inputFields.map((field) => (
            <InputField
              key={field.name}
              {...field}
              value={formData[field.name]}
              onChange={(event) => updateForm(field.name, event.target.value)}
            />
          ))}

          <Button label="Sign in" type="submit" style="bg-[#0039BA] text-white" />
        </form>

        <Button
          label="Sign in with Google"
          style="bg-[#DECCFE] text-[#3A3541]"
          onClick={() => alert("Google login coming soon...")}
        />

        <p className="text-center text-sm">
          I don't have an account.{" "}
          <Link to="/signup" className="text-[#6E39CB] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

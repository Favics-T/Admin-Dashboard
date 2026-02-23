import { useForm } from "../../Context/UserContext";

const InputField = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = true,
  ...rest
}) => {
  const { formData, updateForm } = useForm();
  const resolvedValue = value ?? formData[name] ?? "";
  const resolvedOnChange = onChange ?? ((event) => updateForm(name, event.target.value));

  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        value={resolvedValue}
        onChange={resolvedOnChange}
        placeholder={placeholder}
        required={required}
        {...rest}
        className="w-full rounded bg-[#F4F5F9] p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
};

export default InputField;

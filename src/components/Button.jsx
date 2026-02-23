const Button = ({ label, style = "", type = "button", onClick, disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full cursor-pointer rounded-md p-2 text-[16px] font-medium ${style}`}
  >
    {label}
  </button>
);

export default Button;

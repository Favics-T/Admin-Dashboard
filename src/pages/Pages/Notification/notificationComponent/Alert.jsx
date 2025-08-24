import { motion, AnimatePresence } from "framer-motion";
import { MdCancel } from "react-icons/md";
const Alert = ({ variant = "primary", children, onClose }) => {
  const colors = {
    primary: "bg-indigo-500 text-white",
    secondary: "bg-purple-500 text-white",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-gray-900",
    light: "bg-gray-100 text-gray-800",
    dark: "bg-gray-800 text-white",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        role="alert"
        className={`flex justify-between items-center px-4 py-3 rounded-md shadow ${colors[variant]} mb-3`}
      >
        <p className="text-sm font-medium">{children}</p>
        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close alert"
            className="ml-3 text-xl hover:opacity-80"
          >
            <MdCancel size={16} />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert
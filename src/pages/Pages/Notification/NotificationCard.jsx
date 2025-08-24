import { motion} from "framer-motion";

const NotificationCard = ({ color, label }) => {
  const colorClasses = {
    success: "bg-blue-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    secondary: "bg-purple-500",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={`${colorClasses[color]} text-white text-center px-6 py-6 rounded-md shadow cursor-pointer`}
    >
      <p className="font-semibold">{label}</p>
      <p className="text-xs opacity-90">Notification</p>
    </motion.div>
  );
};
export default NotificationCard
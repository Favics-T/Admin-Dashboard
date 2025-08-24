import Avatar from "./Avatar";
import Waveform from "./Waveform";
import { motion } from "framer-motion";
import { IoIosMic } from "react-icons/io";

const MessageBubble = ({
  side = "in",
  type = "text",
  text,
  time,
  duration,
}) => {
  const isOut = side === "out";
  const bubbleColor = isOut
    ? "border-violet-300 bg-violet-50 text-gray-800"
    : "border-gray-200 bg-white text-gray-800";

  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"} mb-3`}>
      {!isOut && (
        <div className="mr-2 mt-1">
          <Avatar name="LD" color="orange" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`max-w-[82%] sm:max-w-[75%] md:max-w-[70%] rounded-xl border px-4 py-3 ${bubbleColor}`}
        role="group"
      >
        {type === "text" ? (
          <>
            <p className="text-sm leading-relaxed">{text}</p>
            <div className="flex justify-end">
              <span className="text-xs text-gray-400 mt-1">{time}</span>
            </div>
          </>
        ) : (
          <>
            <div
              className={`flex items-center gap-3 ${
                isOut ? "text-violet-600" : "text-gray-600"
              }`}
            >
              <button
                className={`inline-flex h-8 w-8 rounded-full items-center justify-center ${
                  isOut ? "bg-violet-100" : "bg-gray-100"
                }`}
                aria-label="Play voice message"
              >
                <IoIosMic />
              </button>
              <Waveform />
              <span className="text-xs ml-auto">{duration}</span>
            </div>
            <div className="flex justify-end">
              <span className="text-[11px] text-gray-400 mt-1">{time}</span>
            </div>
          </>
        )}
      </motion.div>

      {isOut && (
        <div className="ml-2 mt-1">
          <div className="h-9 w-9 rounded-full bg-violet-500 grid place-items-center text-white text-xs font-semibold">
            MD
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble
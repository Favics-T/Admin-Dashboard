import { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Composer = ({ onSend }) => {
  const [value, setValue] = useState("");
  return (
    <div className="flex items-center gap-3 p-3 bg-white border rounded-xl">
      <button
        className="p-2 text-gray-500 hover:text-gray-700"
        aria-label="Add emoji"
      >
        <BsEmojiSmile />
      </button>
      <input
        aria-label="Write a message"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write a message..."
        className="flex-1 outline-none text-sm placeholder:text-gray-400"
      />
      <button
        onClick={() => {
          if (!value.trim()) return;
          onSend?.(value);
          setValue("");
        }}
        className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium rounded-lg transition"
        aria-label="Send message"
      >
        <FiSend />
        Send
      </button>
    </div>
  );
};

export default Composer
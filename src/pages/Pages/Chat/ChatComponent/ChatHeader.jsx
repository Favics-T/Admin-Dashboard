import Avatar from "./Avatar"
import {  FiMoreVertical } from "react-icons/fi";


const ChatHeader = () => (
  <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b">
    <div className="flex items-center gap-3">
      <Avatar name="Jacob Jones" color="green" />
      <div>
        <p className="text-sm font-medium text-gray-900">Jacob Jones</p>
        <p className="text-xs text-gray-400">Active now</p>
      </div>
    </div>
    <button
      className="p-2 text-gray-400 hover:text-gray-600"
      aria-label="More options"
    >
      <FiMoreVertical />
    </button>
  </div>
)

export default ChatHeader
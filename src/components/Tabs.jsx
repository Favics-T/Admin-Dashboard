import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { id: "home", label: "Home", content: "This is the Home tab" },
  { id: "about", label: "About", content: "This is the About tab" },
  { id: "services", label: "Services", content: "This is the Services tab" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab Buttons */}
      <div className="flex bg-gray-100 p-2 rounded-lg gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-4 py-2 rounded-lg font-medium transition-colors
              ${activeTab === tab.id ? "text-white" : "text-gray-600"}
            `}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-blue-500 rounded-lg"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

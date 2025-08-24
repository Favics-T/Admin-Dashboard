import React, {  useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleMessages,people } from "./data";
import DateDivider from "./ChatComponent/DateDivider";
import MessageBubble from "./ChatComponent/MessageBubble";
import Composer from "./ChatComponent/Composer";
import Sidebar from "./ChatComponent/Sidebar";
import ChatHeader from "./ChatComponent/ChatHeader";
import ChatTabs from "./ChatComponent/ChatTabs";



export default function Chat() {
  const [messages, setMessages] = useState(sampleMessages);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(people[0].id);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen p-3 sm:p-4 lg:p-8">
      {/* Top bar with tabs */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex items-center px-3 py-2 bg-white shadow-md rounded-lg text-sm"
            onClick={() => setIsMobileOpen(true)}
          >
            Open chats
          </button>
          <h1 className="text-lg font-medium text-gray-900 hidden sm:block">
            Chat
          </h1>
        </div>
        <ChatTabs />
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[22rem_minmax(0,1fr)] gap-5 items-start">
        <Sidebar
          isMobileOpen={isMobileOpen}
          onToggleMobile={setIsMobileOpen}
          onSelect={setActiveId}
          activeId={activeId}
        />

        <section className="bg-white rounded-2xl shadow-md overflow-hidden min-h-[70vh] flex flex-col">
          <ChatHeader />

          {/* Messages */}
          <div
            className="flex-1 px-3 sm:px-6 py-4 overflow-y-auto"
            aria-live="polite"
          >
            <DateDivider label="August 15" />
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <MessageBubble
                  key={m.id}
                  side={m.side}
                  type={m.type}
                  text={m.text}
                  time={m.time}
                  duration={m.duration}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Composer */}
          <div className="p-3 sm:p-6">
            <Composer
              onSend={(value) =>
                setMessages((prev) => [
                  ...prev,
                  {
                    id: String(Date.now()),
                    side: "out",
                    type: "text",
                    text: value,
                    time: new Date().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    }),
                  },
                ])
              }
            />
          </div>
        </section>
      </div>

      {/* Backdrop for mobile sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

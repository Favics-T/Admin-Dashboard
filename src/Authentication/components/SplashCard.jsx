import React, { useState, useEffect } from "react";
import { CiUser, CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";
import Logo from "../../assets/Logo.png";

// FAQCard Component
const FAQCard = ({ icon: Icon, desc, bgColor }) => (
  <div className="flex w-full md:gap-8 gap-2 items-center bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-lg">
    <div className={`${bgColor} rounded-full p-2 md:p-4 flex-shrink-0`}>
      <Icon className="text-white text-2xl" />
    </div>
    <p className="text-white lato text-sm md:text-base">{desc}</p>
  </div>
);

// FAQ Data
const faqList = [
  { icon: CiUser, desc: "Join Us", bgColor: "bg-[#0039BA]" },
  {
    icon: CiSearch,
    desc:
      "Bring your own talent pool or let us match your posts with the best ones",
    bgColor: "bg-[#23B1D3]",
  },
  {
    icon: FaPhoneAlt,
    desc:
      "Get in touch with the talents with just a few clicks without cold calls or emails",
    bgColor: "bg-[#00D156]",
  },
];

const SplashCard = ({ onGetStarted }) => {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide for mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % faqList.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <div className="bg-gradient-to-tr from-[#6E39CB] to-[#4B1D99] overflow-x-hidden py-4 h-screen flex flex-col justify-center items-center relative">
      <div className="flex flex-col md:justify-center md:items-center md:px-20 px-8 w-full">
        {/* Mobile-only Logo */}
        <div className="flex justify-center mb-6 md:hidden">
          <img src={Logo} alt="Logo" className="w-32 h-auto" />
        </div>

        {/* Title */}
        <h1 className="Lato text-white text-xl md:text-3xl mb-6 text-center md:text-left">
          How it works?
        </h1>

        {/* FAQ Section */}
        <div className="flex flex-col gap-4 justify-center w-full md:w-3/4">
          {isMobile ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FAQCard {...faqList[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          ) : (
            faqList.map(({ icon, desc, bgColor }) => (
              <FAQCard key={desc} icon={icon} desc={desc} bgColor={bgColor} />
            ))
          )}
        </div>

        {/* Mobile-only Get Started */}
        {onGetStarted && (
          <div className="mt-8 block md:hidden w-full">
            <button
              onClick={onGetStarted}
              className="w-full text-center shadow-lg bg-purple-700 text-white py-3 text-xl rounded-lg cursor-pointer Lato hover:scale-105 transition"
            >
              Get Started
            </button>
          </div>
        )}
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default SplashCard;

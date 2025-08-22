
import React, { useEffect, useState } from "react";
import { CiUser, CiSearch } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FAQCard = ({ icon: Icon, desc, bgColor }) => (
  <motion.div
    key={desc}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.6 }}
    className="flex w-full gap-3 items-center bg-white/10 backdrop-blur-md border border-white/20 px-3 md:py-3 py-8 rounded-xl"
  >
    <div className={`${bgColor} rounded-full p-2`}>
      <Icon className="text-white text-xl" />
    </div>
    <p className="text-white lato text-sm md:text-base">{desc}</p>
  </motion.div>
);

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
  const [index, setIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % faqList.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <div className="  bg-[#4B1D99] h-screen flex flex-col md:gap-0 gap-2 justify-center items-center px-8 md:px-20 text-center md:text-left">
      {/* Title */}
      <h1 className="Lato text-white text-2xl md:text-4xl font-bold mb-6">
        How it works?
      </h1>

      {/* FAQ Section */}
      <div className="w-full  md:w-3/4">
        {isMobile ? (
          <AnimatePresence mode="wait">
            <FAQCard
              key={faqList[index].desc}
              icon={faqList[index].icon}
              desc={faqList[index].desc}
              bgColor={faqList[index].bgColor}
            />
          </AnimatePresence>
        ) : (
          <div className="flex flex-col gap-4">
            {faqList.map(({ icon, desc, bgColor }) => (
              <FAQCard key={desc} icon={icon} desc={desc} bgColor={bgColor} />
            ))}
          </div>
        )}
      </div>

      {/* Get Started (mobile only) */}
      {onGetStarted && (
        <div className="mt-8 block md:hidden">
          <button
            onClick={onGetStarted}
            className="w-full shadow-lg p-4 bg-white/20 text-white py-2 text-lg rounded-lg cursor-pointer Lato hover:bg-white/30 transition"
          >
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default SplashCard;

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free/Personal",
    price: "Free",
    description: "For 1-2 users",
    cta: "Current Plan",
    ctaType: "secondary",
    features: [
      "Unlimited projects",
      "No credit card required",
      "Basic analytics",
      "Community support",
      "Integrations",
    ],
  },
  {
    name: "$89/Professional",
    price: "$89",
    description: "Per year",
    cta: "Try for free",
    ctaType: "primary",
    features: [
      "Everything in Free plan",
      "Kanban/Agile tools",
      "24/7 Email & chat support",
      "Advanced analytics",
      "Complete documentation",
      "Integrations hub",
    ],
  },
  {
    name: "Custom/Enterprise",
    price: "Custom",
    description: "Reach out for a quote",
    cta: "Contact Us",
    ctaType: "primary",
    features: [
      "Everything in Pro plan",
      "Advanced security",
      "Custom workflows",
      "Admin controls",
      "Complete documentation",
      "Dedicated account manager",
    ],
  },
];


const CTAButton = ({ type, children }) => {
  const base =
    "w-full text-sm font-medium rounded-md py-2.5 px-4 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: `${base} bg-[#6E39CB] text-white hover:bg-[#5a2ea5] focus:ring-[#6E39CB]`,
    secondary: `${base} bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-gray-400`,
  };
  return <button className={variants[type]}>{children}</button>;
};

// Feature Item
const FeatureItem = ({ text }) => (
  <li className="flex items-center gap-2 text-sm text-gray-600">
    <Check className="w-4 h-4 text-[#6E39CB]" /> {text}
  </li>
);

// Pricing Card
const PricingCard = ({ tier }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="flex flex-col bg-white rounded-lg shadow-md border border-gray-100 p-6 w-full max-w-sm"
    >
      <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
      <p className="mt-1 text-sm text-gray-500">{tier.description}</p>
      <div className="mt-4">
        <CTAButton type={tier.ctaType}>{tier.cta}</CTAButton>
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((feature, idx) => (
          <FeatureItem key={idx} text={feature} />
        ))}
      </ul>
    </motion.div>
  );
};


const PricingPage = () => {
  return (
    <div className="flex items-center justify-center w-full">
  <section className="  px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-2 text-sm text-gray-500">
          Simple Pricing. No Hidden Fees. Advance features for your business.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {tiers.map((tier, idx) => (
          <PricingCard key={idx} tier={tier} />
        ))}
      </div>
    </section>
    </div>
  
  );
};

export default PricingPage;

import React from "react";
import { MdMoreVert, MdPictureAsPdf } from "react-icons/md";
import Button from "../../../../components/Button";

const billingData = [
  {
    name: "Billing #780-Dec-2022",
    type: "Paid",
    date: "Dec 23, 2022",
    amount: "USD $12.00",
    plan: "Basic Plan",
    users: "15 Users",
  },
  {
    name: "Billing #245-Nov-2022",
    type: "Paid",
    date: "Nov 10, 2022",
    amount: "USD $12.00",
    plan: "Basic Plan",
    users: "15 Users",
  },
  {
    name: "Billing #213-Oct-2022",
    type: "Paid",
    date: "Oct 03, 2022",
    amount: "USD $80.00",
    plan: "Basic Plan",
    users: "15 Users",
  },
  {
    name: "Billing #124-Apr-2022",
    type: "Paid",
    date: "Apr 05, 2022",
    amount: "USD $50.00",
    plan: "Basic Plan",
    users: "25 Users",
  },
  {
    name: "Billing #123-July-2022",
    type: "Paid",
    date: "July 29, 2022",
    amount: "USD $67.00",
    plan: "Basic Plan",
    users: "29 Users",
  },
];

const BillingRow = ({ name, type, date, amount, plan, users }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-8 items-center gap-4 px-4 py-8 border-b border-gray-200 text-xs md:text-sm">
      {/* Billing with icon */}
      <div className="flex items-center gap-2 col-span-2 md:col-span-2">
        <MdPictureAsPdf className=" text-xl md:text-2xl" />
        <div className="flex flex-col">
          <span className="font-medium">{name}</span>
          <span className="text-xs text-gray-500">{type}</span>
        </div>
      </div>

      {/* Date */}
      <div className="text-gray-500">{date}</div>

      {/* Amount */}
      <div className="text-gray-500">{amount}</div>

      {/* Plan */}
      <div className="text-gray-500">{plan}</div>

      {/* Users */}
      <div className="text-gray-500">{users}</div>

      {/* Download Button */}
      <div>
        <button className="bg-gray-800 text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-xs hover:bg-gray-700 transition">
          Download
        </button>
      </div>

      {/* More Icon */}
      <div className="flex justify-end">
        <MdMoreVert className="text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

const BillingHistory = () => {
  return (
    <div className="bg-white py-8 rounded-lg shadow">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 px-4">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Billing History</h1>
          <p className="text-sm text-gray-500">
            Download your previous plan receipts and usage details
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button label="Download all" />
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-8 gap-4 px-4 py-2 border-b font-medium text-gray-500 text-sm">
        <div className="col-span-2">Billing</div>
        <div>Billing Date</div>
        <div>Amount</div>
        <div>Plan</div>
        <div>Users</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Billing Rows */}
      {billingData.map((bill, i) => (
        <BillingRow key={i} {...bill} />
      ))}
    </div>
  );
};

export default BillingHistory;

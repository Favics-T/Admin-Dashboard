import React, { useState } from "react";
import { FaCcVisa, FaPaypal, FaPlus } from "react-icons/fa";

const Invoice = () => {
  const [selectedMethod, setSelectedMethod] = useState("visa");

  return (
    <div className="w-full">
      <div className="flex flex-col">
        {/* Header */}
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Payment Details
        </h1>

        {/* Body */}
        <div className="flex justify-center  w-full">
          <div className="flex items-center  max-w-4xl justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full justify-center items-center flex flex-col">
              {/* Contact */}
              <div className="bg-white w-full rounded-lg mb-4">
                <button className="w-full flex justify-between items-center px-4 py-3 subHeader">
                  Contact
                  <span className="">▼</span>
                </button>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-lg w-full max-w-2xl">
                <button className="w-full flex justify-between items-center px-4 py-3 subHeader">
                  Payment
                  <span className="text-gray-400">▼</span>
                </button>

                {/* Payment Content */}
                <div className="px-4 py-6 border-t">
                  <h2 className="subHeader mb-4">Payment method</h2>

                  {/* Payment Options */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button
                      onClick={() => setSelectedMethod("visa")}
                      className={`border rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-sm font-medium transition ${
                        selectedMethod === "visa"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <FaCcVisa className="text-3xl text-blue-600" />
                      <span>**** 7809</span>
                      <span className="text-xs text-gray-500">VISA</span>
                    </button>

                    <button
                      onClick={() => setSelectedMethod("paypal")}
                      className={`border rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-sm font-medium transition ${
                        selectedMethod === "paypal"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <FaPaypal className="text-3xl text-blue-500" />
                      <span>**** 7809</span>
                      <span className="text-xs text-gray-500">PayPal</span>
                    </button>

                    <button
                      onClick={() => setSelectedMethod("new")}
                      className={`border rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-sm font-medium transition ${
                        selectedMethod === "new"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-300 hover:border-purple-400"
                      }`}
                    >
                      <FaPlus className="text-2xl text-gray-500" />
                      <span>New card</span>
                    </button>
                  </div>

                  {/* Form Fields */}
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Card holder name
                      </label>
                      <input
                        type="text"
                        defaultValue="John Watson"
                        className="w-1/2 px-3 py-2 bg-[#DBDCDE] rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-700 mb-1">
                        Billing address
                      </label>
                      <input
                        type="text"
                        defaultValue="Germany"
                        className="w-1/2 px-3 py-2 bg-[#DBDCDE] rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">
                          Zip code
                        </label>
                        <input
                          type="text"
                          defaultValue="6789123"
                          className="w-full px-3 py-2 bg-[#DBDCDE] rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          defaultValue="Berlin"
                          className="w-full px-3 py-2 bg-[#DBDCDE] rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Invoice Checkbox */}
                    <div className="flex items-center gap-2 mt-2">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 border-gray-300 text-purple-600 focus:ring-purple-500 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        Invoice Address
                      </span>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition"
                    >
                      Pay $67.00
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;

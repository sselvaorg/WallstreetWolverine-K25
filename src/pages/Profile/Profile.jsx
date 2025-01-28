import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-6 sm:mb-8 tracking-wide text-center">
        PROFILE
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left Section: Profile Details (Same Width, No Vertical Stretch) */}
        <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-4 sm:p-6 shadow-lg w-full self-start">
          <div className="flex flex-col gap-4 sm:gap-6">
            {["K! ID", "Name", "College", "Department", "Email"].map((label, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-base sm:text-lg font-medium">{label}</span>
                <hr className="border-t border-gray-600 mt-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Company List (Same as Before) */}
        <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-4 sm:p-6 shadow-lg w-full">
          {/* Table Header */}
          <div className="grid grid-cols-2 font-semibold text-base sm:text-lg pb-2 sm:pb-3 border-b border-gray-600">
            <span>List of companies</span>
            <span className="text-right">Number of stocks</span>
          </div>

          {/* Company List */}
          <div className="mt-3 sm:mt-4 flex flex-col gap-3 sm:gap-4">
            {[
              "Aquashop",
              "Razer Electronics",
              "BV Infra",
              "Goal Enterprise",
              "Med Pharma",
              "Paradigm",
              "VI Finance",
            ].map((company, index) => (
              <div
                key={index}
                className="grid grid-cols-2 text-sm sm:text-md font-medium py-2 px-3 sm:px-4 bg-white rounded-md shadow-md"
              >
                <span>{company}</span>
                <span className="text-right">0</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-blue-500 mb-10 tracking-wide">PROFILE</h1>
      <div className="w-full max-w-5xl grid grid-cols-2 gap-8">
        <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-4 shadow-lg h-72">
          <div className="space-y-4">
            {["K! ID", "Name", "College", "Department", "Email"].map((label, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-lg font-medium">{label}</span>
                <hr className="border-t border-gray-600 mt-2" />
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-2 font-semibold text-lg pb-3 border-b border-gray-600">
            <span>List of companies</span>
            <span className="text-right">Number of stocks</span>
          </div>
          <div className="mt-4 space-y-4">
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
                className="grid grid-cols-2 text-md font-medium py-2 px-4 bg-white rounded-md shadow-md"
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

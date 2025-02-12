import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

export default function Profile() {
  const [userData, setUserData] = useState({
    "K! ID": "",
    Name: "",
    College: "",
    Department: "",
    Email: "",
  });

  const [stocks, setStocks] = useState({});
  const [stockPage, setStockPage] = useState(1);

  const fetchDetails = async () => {
    console.log("token", localStorage.getItem("token"));
    try {
      const response = await axios.get("http://localhost:5000/profile", {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });

      const { userTable, stockTable } = response.data.profile;
      console.log("User Data:", userTable);
      console.log("Stock Data:", stockTable);

      setUserData((prevUserData) => ({
        ...prevUserData,
        ...userTable,
      }));

      setStocks(stockTable || {});
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-[#01041f] to-[#021844]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center p-4 sm:p-6 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 mb-6 sm:mb-8 tracking-wide text-center">
          PROFILE
        </h1>

        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-4 sm:p-6 shadow-lg w-full self-start">
            <div className="flex flex-col gap-4 sm:gap-6">
              {Object.entries(userData).map(([key, value], index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex flex-row justify-between">
                    <span className="text-md sm:text-lg font-medium w-[30%] text-justify">
                      {key}
                    </span>
                    <span className="text-md lg:text-lg font-medium w-[70%] text-center">
                      {value}
                    </span>
                  </div>
                  <hr className="border-t border-gray-600 mt-1" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-red-300 to-blue-300 rounded-lg p-4 sm:p-6 shadow-lg w-full">
            <div className="grid grid-cols-2 font-semibold text-base sm:text-lg pb-2 sm:pb-3 border-b border-gray-600">
              <span>List of Companies</span>
              <span className="text-right">Number of Stocks</span>
            </div>

            <div className="mt-3 sm:mt-4 flex flex-col gap-3 sm:gap-4">
              {Object.keys(stocks).length > 0 ? (
                Object.entries(stocks)
                  .slice((stockPage - 1) * 6, stockPage * 6)
                  .map(([company, count], index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 text-sm sm:text-md font-medium py-2 px-3 sm:px-4 bg-white rounded-md shadow-md"
                    >
                      <span>{company}</span>
                      <span className="text-right">{count}</span>
                    </div>
                  ))
              ) : (
                <p className="text-center text-md text-gray-700">
                  No stocks found.
                </p>
              )}
              <div className="flex w-full p-3 justify-between">
                <button
                  disabled={stockPage === 1}
                  onClick={() => setStockPage(stockPage - 1)}
                  className="font-semibold  px-4 py-2 bg-gradient-to-r from-blue-400 to-red-400 rounded disabled:opacity-70"
                >
                  Previous
                </button>
                <span>
                  Page {stockPage} of {4}{" "}
                </span>
                <button
                  disabled={stockPage === 4}
                  onClick={() => setStockPage(stockPage + 1)}
                  className="font-semibold px-4 py-2 bg-gradient-to-r  from-red-400 to-blue-400 rounded disabled:opacity-70"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

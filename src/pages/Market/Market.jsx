import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { stocks } from "../../constants/market";
import useServerTime from "./components/UseServerTime";

function Market() {
  const navigate = useNavigate();
  const currentTime = useServerTime();

  const itemsPerPage = 6;
  const newsPerPage = 4;

  const [newsPage, setNewsPage] = useState(1);
  const [stocksPage, setStocksPage] = useState(1);

  const totalNewsPages = Math.ceil(stocks.length / newsPerPage);
  const totalStocksPages = Math.ceil(stocks.length / itemsPerPage);

  const handleStockClick = (name) => {
    navigate(`/stock/${name}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center bg-[url('/images/bear.jpg')] bg-cover bg-center lg:bg-top custom-scrollbar">
      <Navbar />
      <div className="w-full flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24 pb-5">
        <h1 className="text-3xl font-bold text-center mt-16 mb-8">Market</h1>
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-light/20 p-6 rounded-lg shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">News</h2>
            <div className="bg-light/20 flex flex-col p-4 text-sm text-justify rounded-lg">
              {stocks
                .slice((newsPage - 1) * newsPerPage, newsPage * newsPerPage)
                .map((stock) => (
                  <div
                    key={stock.name}
                    className="mb-4 p-3 bg-dark/80 rounded-lg"
                  >
                    <h3 className="text-sm font-bold text-white text-center">
                      {stock.name}
                    </h3>
                    {currentTime >= new Date(stock.headline1) && (
                      <p className="text-light text-justify text-sm">
                        {stock.news1}
                      </p>
                    )}
                    {currentTime >= new Date(stock.headline2) && (
                      <p className="text-red-500 text-justify text-sm">
                        {stock.news2}
                      </p>
                    )}
                  </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                disabled={newsPage === 1}
                onClick={() => setNewsPage(newsPage - 1)}
                className="px-4 py-2 bg-[#020327]/80 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {newsPage} of {totalNewsPages}
              </span>
              <button
                disabled={newsPage === totalNewsPages}
                onClick={() => setNewsPage(newsPage + 1)}
                className="px-4 py-2 bg-[#020327]/80 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
          <div className="bg-light/20 p-6 rounded-lg shadow-lg backdrop-blur-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Stocks</h2>
            {stocks
              .slice((stocksPage - 1) * itemsPerPage, stocksPage * itemsPerPage)
              .map((company) => (
                <button
                  key={company.name}
                  onClick={() => handleStockClick(company.name)}
                  className="w-full mb-3 p-3 text-left border border-gray-600 rounded-lg bg-dark/80 hover:bg-dark/95 transition"
                >
                  {company.name}
                </button>
              ))}
            <div className="flex justify-between items-center mt-4">
              <button
                disabled={stocksPage === 1}
                onClick={() => setStocksPage(stocksPage - 1)}
                className="px-4 py-2 bg-[#020327]/80 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {stocksPage} of {totalStocksPages}
              </span>
              <button
                disabled={stocksPage === totalStocksPages}
                onClick={() => setStocksPage(stocksPage + 1)}
                className="px-4 py-2 bg-[#020327]/80 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;

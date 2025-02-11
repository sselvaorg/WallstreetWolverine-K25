import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { stocks } from "../../constants/market";
import useServerTime from "./components/UseServerTime";
function Market() {
  const navigate = useNavigate();
  const currentTime = useServerTime();
  const handleStockClick = (name) => {
    navigate(`/stock/${name}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <div className="w-full fixed top-0 left-0 bg-gray-800 shadow-md">
        <Navbar />
      </div>

      <h1 className="text-3xl font-bold text-center mt-20 mb-6">Market</h1>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-fit">
          <h2 className="text-2xl font-semibold mb-4">News</h2>
          <div className="h-64 bg-gray-700 flex items-center justify-center rounded-lg">
            {stocks.map((stock) => {
              const headlineTime = new Date(stock.headline1);
              return (
                currentTime >= headlineTime && (
                  <div key={stock.name} className="news-item">
                    <strong>{stock.name}</strong> - Breaking News!
                  </div>
                )
              );
            })}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Stocks</h2>
          {stocks.map((company) => (
            <button
              key={company.name}
              onClick={() => handleStockClick(company.name)}
              className="w-full mb-2 p-3 text-left border border-gray-600 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              {company.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Market;

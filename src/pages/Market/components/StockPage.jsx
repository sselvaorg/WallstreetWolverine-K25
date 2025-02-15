import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { stocks } from "../../../constants/market";
import Navbar from "../../../components/Navbar/Navbar";
import useServerTime from "./UseServerTime";
import axios from "axios";
import { isAuthenticated } from "../../../constants/navlinks";
import toast from "react-hot-toast";
function StockPage() {
  let name = useParams().id;
  const stock = stocks.find((s) => s.name === name);
  const currentTime = useServerTime();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockCount, setStockCount] = useState(1);
  const [isBuying, setIsBuying] = useState(true);
  const [desc, setDesc] = useState("");
  const [balance, setBalance] = useState(
    isAuthenticated() ? "Loading..." : "Login to view Balance!"
  );
  useEffect(() => {
    fetchDetails();
  }, []);

  if (!stock) {
    return <h2 className="text-white text-center text-2xl">Stock not found</h2>;
  }

  const headline1Time = new Date(stock.headline1);
  const bufferEnd1Time = new Date(stock.bufferEnd1);
  const headline2Time = new Date(stock.headline2);
  const bufferEnd2Time = new Date(stock.bufferEnd2);

  let buyPrice = null;
  let sellPrice = null;
  let canBuy = false;
  let canSell = false;

  if (currentTime >= headline1Time && currentTime <= bufferEnd1Time) {
    buyPrice = stock.prices[0];
    canBuy = true;
  } else if (currentTime > bufferEnd1Time && currentTime <= headline2Time) {
    buyPrice = stock.prices[1];
    canBuy = true;
  }
  if (currentTime > headline2Time && currentTime < bufferEnd2Time) {
    sellPrice = stock.prices[1];
    canSell = true;
  } else if (currentTime >= bufferEnd2Time) {
    sellPrice = stock.prices[2];
    canSell = true;
  }

  const handleBuySellClick = (buying) => {
    setIsBuying(buying);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const fetchDetails = async () => {
    try {
      const response = await axios.get("http://localhost:5000/stock/wallet", {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      });

      setBalance(response.data.wallet);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleTransaction = async (e) => {
    if (!isAuthenticated()) {
      toast.error("Please login to make transactions!");
      return;
    }
    e.preventDefault();
    const price = isBuying ? buyPrice : sellPrice;
    if (!price) {
      toast.error(`Transaction not allowed at this time.`);
      return;
    }

    const url = isBuying
      ? `http://localhost:5000/buyStock/${name}/${price}/${stockCount}`
      : `http://localhost:5000/sellStock/${name}/${price}/${stockCount}`;

    try {
      await axios.post(
        url,
        { desc: desc },
        {
          headers: {
            authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(`Stock has been ${isBuying ? "bought" : "sold"}`);
      //console.log("buy/sell response:", response);
    } catch (error) {
      console.error(
        `Can't ${isBuying ? "buy" : "sell"} the stock:`,
        error.response?.data?.message || error.message
      );
      toast.error(
        error.response?.data?.message ||
          `Stock ${isBuying ? "purchase" : "sale"} failed. Please try again.`
      );
    } finally {
      handleCloseModal();
      setDesc("");
      setStockCount(1);
      fetchDetails();
    }
  };

  return (
    <div className="h-screen w-screen bg-[#1e1e2f] overflow-hidden text-white flex flex-col font-sans">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-4 w-full h-full">
        <div className=" flex-1 md:flex-2 w-[4/5]">
          <h1 className="text-4xl font-bold text-center uppercase text-white">
            Market
          </h1>
          <div className="bg-[#29293d] p-5 rounded-lg shadow-lg mt-5">
            <h2 className="text-[#64a0df] text-3xl font-bold text-center mb-5">
              {stock.name} : {stock.prices[0]} Kuros per Stock
            </h2>
            <h2 className="text-[#68df64] text-3xl font-bold text-center mb-5">
              Your Balance : <span>{balance}</span>
            </h2>
            <div className="text-green-300">{stock.description}</div>
          </div>

          <div className="flex flex-row justify-center gap-4 items-center p-5">
            <button
              className={`p-2 font-bold rounded flex transition transform hover:scale-105 hover:shadow-lg   
                ${
                  canBuy
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
              onClick={() => handleBuySellClick(true)}
              disabled={!canBuy}
              title={!canBuy ? "Buying not available at this time" : ""}
            >
              Buy {canBuy ? "" : "🚫"}
            </button>

            <button
              className={`p-2 font-bold rounded flex transition transform hover:scale-105 hover:shadow-lg
                ${
                  canSell
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-gray-600 text-gray-300 cursor-not-allowed"
                }`}
              onClick={() => handleBuySellClick(false)}
              disabled={!canSell}
              title={!canSell ? "Selling not available at this time" : ""}
            >
              Sell {canSell ? "" : "🚫"}
            </button>

            <button
              className="p-2 bg-yellow-500 hover:bg-yellow-600 flex text-white rounded transition transform hover:scale-105 hover:shadow-lg"
              onClick={() => navigate(`/history`)}
            >
              History
            </button>
          </div>
        </div>

        <div className=" bg-[#29293d] p-5 rounded-lg shadow-lg flex flex-col items-center flex-1 md:flex-1">
          <Box title="News">
            <p>This is the latest news about {stock.name}.</p>
            {currentTime >= new Date(stock.headline1) && (
              <p className="text-blue-500 font-semibold">{stock.news1}</p>
            )}
            {currentTime >= new Date(stock.headline2) && (
              <p className="text-red-500 font-semibold">{stock.news2}</p>
            )}
            <p>More updates will be shown here.</p>
          </Box>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">
            Stock {isBuying ? "Purchase" : "Sale"} Details
          </h2>
          <p>Stock Name: {stock.name}</p>
          {/* <p>Price per Stock: ${isBuying ? buyPrice : sellPrice}</p> */}
          <p>Time: {new Date().toLocaleTimeString()}</p>
          <label className="block mt-2">
            No. of Stocks:
            <input
              type="number"
              value={stockCount}
              min="1"
              onChange={(e) => setStockCount(e.target.value)}
              className="border p-2 rounded w-full mt-1 bg-gray-200 text-black"
            />
          </label>
          <label className="block mt-2">
            Description:
            <input
              type="text"
              value={desc}
              placeholder="Justify your action in few words"
              onChange={(e) => setDesc(e.target.value)}
              className="border p-2 rounded w-full mt-1 bg-gray-200 text-black"
              required
            />
          </label>
          <div className="mt-4 flex justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              onClick={handleTransaction}
            >
              Proceed
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative text-black">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

function Box({ title, children }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-300 text-black w-full">
      {title && <h2 className="text-lg font-bold mb-2 text-center">{title}</h2>}
      {children}
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default StockPage;

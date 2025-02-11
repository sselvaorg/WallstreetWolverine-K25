import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./StockPage.module.css";
import PropTypes from "prop-types";
import { stocks } from "../../../constants/market";
import Navbar from "../../../components/Navbar/Navbar";
import useServerTime from "./UseServerTime";
import axios from "axios";

function StockPage() {
  let name = useParams().id;
  const stock = stocks.find((s) => s.name === name);
  const currentTime = useServerTime();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockCount, setStockCount] = useState(1);
  const [isBuying, setIsBuying] = useState(true);
  const [desc, setDesc] = useState("");

  if (!stock) {
    return <h2>Stock not found</h2>;
  }

  const headline1Time = new Date(stock.headline1);
  const bufferEnd1Time = new Date(stock.bufferEnd1);
  const headline2Time = new Date(stock.headline2);
  const bufferEnd2Time = new Date(stock.bufferEnd2);

  let buyPrice = null;
  let sellPrice = null;
  let canBuy = false;
  let canSell = false;

  if (currentTime >= headline1Time && currentTime < bufferEnd1Time) {
    buyPrice = stock.prices[0];
    canBuy = true;
  } else if (currentTime >= bufferEnd1Time && currentTime < headline2Time) {
    buyPrice = stock.prices[1];
    canBuy = true;
  }
  if (currentTime >= headline2Time && currentTime < bufferEnd2Time) {
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

  const handleTransaction = async (e) => {
    e.preventDefault();
    const price = isBuying ? buyPrice : sellPrice;
    if (!price) {
      alert(`Transaction not allowed at this time.`);
      return;
    }

    const url = isBuying
      ? `http://localhost:5000/buyStock/${name}/${price}/${stockCount}`
      : `http://localhost:5000/sellStock/${name}/${price}/${stockCount}`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      });
      alert(`Stock has been ${isBuying ? "bought" : "sold"} at $${price}`);
    } catch (error) {
      console.error(
        `Can't ${isBuying ? "buy" : "sell"} the stock:`,
        error.response?.data?.message || error.message
      );
      alert(
        error.response?.data?.message ||
          `Stock ${isBuying ? "purchase" : "sale"} failed. Please try again.`
      );
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.charts}>
          <h1 className={styles.mainTitle}>Market</h1>
          <div className={styles.chartContainer}>
            <h2 className="stock-name">{stock.name}</h2>
            <div className="text-green-300">{stock.description}</div>
          </div>

          <div>
            <button
              className={`${styles.button} ${styles.buyButton}`}
              onClick={() => handleBuySellClick(true)}
              disabled={!canBuy}
              title={!canBuy ? "Buying not available at this time" : ""}
            >
              Buy {canBuy ? "" : "🚫"}
            </button>

            <button
              className={`${styles.button} ${styles.sellButton}`}
              onClick={() => handleBuySellClick(false)}
              disabled={!canSell}
              title={!canSell ? "Selling not available at this time" : ""}
            >
              Sell {canSell ? `($${sellPrice})` : "🚫"}
            </button>

            <button
              className={`${styles.button} ${styles.historyButton}`}
              onClick={() => navigate(`/history`)}
            >
              History
            </button>
          </div>
        </div>

        <div className={styles.newsBox}>
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
          <p>Price per Stock: ${isBuying ? buyPrice : sellPrice}</p>
          <p>Time: {new Date().toLocaleTimeString()}</p>
          <label className="block mt-2">
            No. of Stocks:
            <input
              type="number"
              value={stockCount}
              min="1"
              onChange={(e) => setStockCount(e.target.value)}
              className="border p-2 rounded w-full mt-1"
            />
          </label>
          <label className="block mt-2">
            Description:
            <input
              type="text"
              value={desc}
              placeholder="Enter your Description"
              onChange={(e) => setDesc(e.target.value)}
              className="border p-2 rounded w-full mt-1"
              required
            />
          </label>
          <div className="mt-4 flex justify-center">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
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
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-300">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default StockPage;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

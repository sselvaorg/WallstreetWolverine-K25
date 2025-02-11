import { useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import styles from "./StockPage.module.css";
import PropTypes from "prop-types";
import { stocks } from "../../../constants/market";
import Navbar from "../../../components/Navbar/Navbar";
import axios from "axios";

function StockPage() {
  let name = useParams().id;
  const stock = stocks.find((s) => s.name === name);
  // const stock = stocks;
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockCount, setStockCount] = useState(1);
  const [desc, setDesc] = useState("");

  if (!stock) {
    return <h2>Stock not found</h2>;
  }

  const handleBuySellClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBuy = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:5000/:column/:value/:nos");
      alert("Stock has been bought");
      localStorage.setItem("token", response.data.token);
  
    } catch(error) {
      console.error("Can't Buy The Stock :",error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Stock Purchase Failed. Please try again.");
    }
  }

  const handleSell = async (e) => {
    e.preventDefault();
    try{

    } catch(error) {
      console.log("Can't Sell the Stock : ",error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Stock Purchase Failed. Please try again.");
    }
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.charts}>
          <h1 className={styles.mainTitle}>Market</h1>
          <div className={styles.chartContainer}>
            <h2 className="stock-name">{stock.name}</h2>
            <div className={styles.chartContainer}>
            <div className="text-green-300">
              {stock.description}
            </div>
          </div>
          </div>
          

          <div>
            <button
              className={`${styles.button} ${styles.buyButton}`}
              onClick={handleBuySellClick}
            >
              Buy
            </button>
            <button
              className={`${styles.button} ${styles.sellButton}`}
              onClick={handleBuySellClick}
            >
              Sell
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
            <p>More updates will be shown here.</p>
          </Box>
        </div>
      </div>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Stock Purchase Details</h2>
          <p>Stock Name: {stock.name}</p>
          <p>Price per Stock: ${stock.prices[0]}</p>
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
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
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
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

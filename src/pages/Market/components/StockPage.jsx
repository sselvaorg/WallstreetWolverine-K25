import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./StockPage.module.css";
import PropTypes from "prop-types";

const stockDetails = {
  1: { name: "Aquashop", price: 120.5 },
  2: { name: "RazerElectronics", price: 98.75 },
  3: { name: "BVInfra", price: 185.2 },
  4: { name: "GoalEnterprise", price: 152.9 },
  5: { name: "MedPharma", price: 211.3 },
  6: { name: "Paradigm", price: 140.6 },
  7: { name: "ViFinance", price: 176.4 },
  8: { name: "ForgeTech", price: 200.9 },
};

function StockPage() {
  const { id } = useParams();
  const stock = stockDetails[id];
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stockCount, setStockCount] = useState(1);

  if (!stock) {
    return <h2>Stock not found</h2>;
  }

  const handleBuySellClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.charts}>
          <h1 className={styles.mainTitle}>Market</h1>
          <div className={styles.chartContainer}>
            <h2 className="stock-name">{stock.name}</h2>
            {/* <GridItem>
              <LineChart />
            </GridItem> */}
          </div>

          <div className={styles.chartContainer}>
            {/* <GridItem>
              <LineChart1 />
            </GridItem> */}
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
              onClick={() => navigate(`/transactions/${id}`)}
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

      {/* Modal Popup */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2 className="text-xl font-bold mb-4">Stock Purchase Details</h2>
          <p>Stock Name: {stock.name}</p>
          <p>Price per Stock: ${stock.price}</p>
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

// function GridItem({ title, children }) {
//   return (
//     <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
//       <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
//       {children}
//     </div>
//   );
// }

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

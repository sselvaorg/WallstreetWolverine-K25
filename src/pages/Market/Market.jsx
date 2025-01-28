import { useNavigate } from "react-router-dom";
import styles from "./components/Market.module.css";
import Navbar from "../../components/Navbar/Navbar";

const stocks = [
  { id: "1", name: "Aquashop" },
  { id: "2", name: "RazerElectronics" },
  { id: "3", name: "BVInfra" },
  { id: "4", name: "GoalEnterprise" },
  { id: "5", name: "MedPharma" },
  { id: "6", name: "Paradigm" },
  { id: "7", name: "ViFinance" },
  { id: "8", name: "ForgeTech" },
];

function Market() {
  const navigate = useNavigate();

  const handleStockClick = (id) => {
    navigate(`/stock/${id}`);
  };

  return (
    <div className={styles.container}>
      <Navbar />

      {/* Page Heading */}
      <h1 className={styles.heading}>Market</h1>

      {/* Content Grid */}
      <div className={styles.grid}>
        {/* News Section */}
        <div className={styles.newsSection}>
          <h2 className={styles.sectionHeading}>News</h2>
          <div className={styles.newsBox}>-----X-----</div>
        </div>

        {/* Stock List Section */}
        <div className={styles.stockList}>
          <h2 className={styles.sectionHeading}>Stocks</h2>
          {stocks.map((stock) => (
            <button
              key={stock.id}
              onClick={() => handleStockClick(stock.id)}
              className={styles.stockButton}
            >
              {stock.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Market;

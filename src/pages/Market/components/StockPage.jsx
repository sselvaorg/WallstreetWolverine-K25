import { useParams } from "react-router-dom";
import styles from "./StockPage.module.css";
import LineChart from "./LineChart";
import LineChart1 from "./LineChart1";

const stockDetails = {
  1: {
    name: "Aquashop",
    description: "Details about Aquashop",
    imgSrc: "/images/aquashop.png",
  },
  2: {
    name: "RazerElectronics",
    description: "Details about RazerElectronics",
    imgSrc: "/images/razer.png",
  },
  3: {
    name: "BVInfra",
    description: "Details about BVInfra",
    imgSrc: "/images/bvinfra.png",
  },
  4: {
    name: "GoalEnterprise",
    description: "Details about GoalEnterprise",
    imgSrc: "/images/goal.png",
  },
  5: {
    name: "MedPharma",
    description: "Details about MedPharma",
    imgSrc: "/images/medpharma.png",
  },
  6: {
    name: "Paradigm",
    description: "Details about Paradigm",
    imgSrc: "/images/paradigm.png",
  },
  7: {
    name: "ViFinance",
    description: "Details about ViFinance",
    imgSrc: "/images/vifinance.png",
  },
  8: {
    name: "ForgeTech",
    description: "Details about ForgeTech",
    imgSrc: "/images/forgetech.png",
  },
};

function StockPage() {
  const { id } = useParams();
  const stock = stockDetails[id];

  if (!stock) {
    return <h2>Stock not found</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Left Side - Charts */}

        <div className={styles.charts}>
          <h1 className={styles.mainTitle}>Market</h1>
          <div className={styles.chartContainer}>
            <h2 className="stock-name">{stock.name}</h2>
            <GridItem>
              <LineChart />
            </GridItem>
          </div>

          <div className={styles.chartContainer}>
            <GridItem>
              <LineChart1 />
            </GridItem>
          </div>

          <div>
            <button className={`${styles.button} ${styles.buyButton}`}>
              Buy
            </button>
            <button className={`${styles.button} ${styles.sellButton}`}>
              Sell
            </button>
            <button className={`${styles.button} ${styles.historyButton}`}>
              History
            </button>
          </div>
        </div>

        {/* Right Side - News Box */}
        <div className={styles.newsBox}>
          <Box title="News">
            <p>This is the latest news about {stock.name}.</p>
            <p>More updates will be shown here.</p>
          </Box>
        </div>
      </div>
    </div>
  );
}

function GridItem({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 bg-slate-900/50 rounded-xl h-[400px]">
      <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
      {children}
    </div>
  );
}

// Reusable Box Component
function Box({ title, children }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-300">
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
    </div>
  );
}

export default StockPage;

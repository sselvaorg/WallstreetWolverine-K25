import { useNavigate } from "react-router-dom";
import styles from "./components/Market.module.css";
import Navbar from "../../components/Navbar/Navbar";

const stocks = [
  { id: "1", name: "QuantumCoreSystems" },
  { id: "2", name: "NeonByteTechnologies" },
  { id: "3", name: "HyperNovaSystems" },
  { id: "4", name: "SkyNetRobotics" },
  { id: "5", name: "TitanSportswear" },
  { id: "6", name: "ProBallEquipment" },
  { id: "7", name: "StrikeForceSports" },
  { id: "8", name: "ZenithMotors" },
  { id: "9", name: "OrionAutoTech" },
  { id: "10", name: "VoltEdgeMotors" },
  { id: "11", name: "TitanXAutomobiles" },
  { id: "12", name: "StellarBank" },
  { id: "13", name: "EverTrustFinancial" },
  { id: "14", name: "NovaCapitalHoldings" },
  { id: "15", name: "QuantumPay" },
  { id: "16", name: "SwiftCart" },
  { id: "17", name: "NeoWearFashion" },
  { id: "18", name: "HorizonMart" },
  { id: "19", name: "BuySmartRetail" },
  { id: "20", name: "BioVantaPharmaceuticals" },
  { id: "21", name: "MedexGenLabs" },
  { id: "22", name: "NeuroSynBiotech" },
  { id: "23", name: "GenovaHealth" },
  { id: "24", name: "HorizonTechInnovations" }
];



function Market() {
  const navigate = useNavigate();

  const handleStockClick = (id) => {
    navigate(`/stock/${id}`);
  };

  return (
    <div className={styles.container}>
      <div className="w-full fixed left-0">
        <Navbar />
      </div>

      <h1 className={styles.heading}>Market</h1>

      <div className={styles.grid}>
        <div className={styles.newsSection}>
          <h2 className={styles.sectionHeading}>News</h2>
          <div className={styles.newsBox}>-----X-----</div>
        </div>

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

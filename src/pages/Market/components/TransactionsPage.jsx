import { useParams, useNavigate } from "react-router-dom";
import styles from "./StockPage.module.css"; // Reusing the same CSS for consistency

const dummyTransactions = [
  { company: "Aquashop", quantity: 10, flag: "Buy" },
  { company: "RazerElectronics", quantity: 5, flag: "Sell" },
  { company: "MedPharma", quantity: 8, flag: "Buy" },
];

function TransactionsPage() {
  const { id } = useParams(); // Get the stock ID from the URL
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.container} flex flex-col items-center justify-center`}
    >
      <h1
        style={{ color: "#64a0df" }}
        className="text-3xl font-bold text-center my-6"
      >
        Transactions
      </h1>

      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border border-gray-400">Company</th>
              <th className="p-3 border border-gray-400">Quantity</th>
              <th className="p-3 border border-gray-400">Flag</th>
            </tr>
          </thead>
          <tbody>
            {dummyTransactions.map((transaction, index) => (
              <tr key={index} className="bg-gray-100 border-b border-gray-300">
                <td className="p-3 border border-gray-400">
                  {transaction.company}
                </td>
                <td className="p-3 border border-gray-400">
                  {transaction.quantity}
                </td>
                <td className="p-3 border border-gray-400">
                  {transaction.flag}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-6">
          <button
            className={`${styles.button} ${styles.buyButton}`}
            onClick={() => navigate(`/stock/${id}`)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransactionsPage;

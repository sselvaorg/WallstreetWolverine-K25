import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Market.module.css";

const stocks = [
    { id: "1", name: "Aquashop" },
    { id: "2", name: "RazerElectronics" },
    { id: "3", name: "BVInfra" },
    { id: "4", name: "GoalEnterprise" },
    { id: "5", name: "MedPharma" },
    { id: "6", name: "Paradigm" },
    { id: "7", name: "ViFinance" },
    { id: "8", name: "ForgeTech" }
];

function Market() {
    const navigate = useNavigate();

    const handleStockClick = (id) => {
        navigate(`/stock/${id}`);
    };

    return (
        <div className={styles.container}>
            {/* Navbar */}
            <nav className={styles.navbar}>
                <a href="/">Home</a>
                <a href="/market">Market</a>
                <a href="/profile">Profile</a>
                <a href="/instructions">Instructions</a>
                <a href="/rules">Rules</a>
                <a href="/contact">Contact</a>
                <a href="/login">Login</a>
            </nav>

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
                            className={styles.stockButton}>
                            {stock.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Market;

import styles from "./Loader.module.css";
import PropTypes from "prop-types";

export default function Loader({ className = "", isLarge = false }) {
  return (
    <div
      className={`${styles.loaderWrapper} ${
        isLarge ? styles.largeLoader : ""
      } ${className}`}
    >
      <div className={styles.coin}>
        <div className={`${styles.side} ${styles.heads}`}>$</div>
        <div className={`${styles.side} ${styles.tails}`}>$</div>
      </div>
    </div>
  );
}

Loader.propTypes = {
  className: PropTypes.string,
  isLarge: PropTypes.bool,
};

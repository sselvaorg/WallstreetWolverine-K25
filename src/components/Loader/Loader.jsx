import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className="">
      <div className={styles.coin}>
        <div className={styles.side + " " + styles.heads}>$</div>
        <div className={styles.side + " " + styles.tails}>$</div>
      </div>
    </div>
  );
}

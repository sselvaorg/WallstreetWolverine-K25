// eslint-disable-next-line no-unused-vars
import  { useRef } from "react";
import styles from "./Heading.module.css";

// eslint-disable-next-line react/prop-types
function Heading({ text}) {

  return (
    <div className={styles.headbox}>
        <h1 className={styles.insthead} data-text={text}>{text}</h1>
    </div>
  );
}

export default Heading;

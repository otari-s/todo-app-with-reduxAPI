import React, { useState, useEffect } from "react";
import styles from "./DateTime.module.css";
function DateTime() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={styles.date}>
      <p className={styles.d}>{date.toLocaleDateString()}</p>
      <p className={styles.t}>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default DateTime;

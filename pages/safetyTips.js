import styles from "../styles/safetyTips.module.css";
function safetyTips() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        <div className={styles.safety_tips_container}>
          <p>Safety Tips</p>
        </div>
        <div className={styles.safety_tips_content}>
          <p>{/* some wired content of yours goes here */}</p>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default safetyTips;

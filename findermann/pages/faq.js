import styles from "../styles/faq.module.css";
function faq() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        <div className={styles.faq_container}>
          <p>FAQS</p>
        </div>
        <div className={styles.faq_content}>
          <p>{/* some wired content of yours goes here */}</p>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default faq;

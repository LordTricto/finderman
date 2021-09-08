import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

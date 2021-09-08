import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      {/* <!-- start of footer_container --> */}
      <footer>
        <div className={styles.footer_container}>
          <h2 id={`${styles["finderman-Logo"]}`}>Finderman</h2>
          <div className={styles.footer_other_links}>
            <div className={styles.other_link}>
              <h4>Support</h4>
              <li>
                <Link href="/contactUs">
                  <a href="">Contact us</a>
                </Link>
              </li>
              <li>
                <Link href="/safetyTips">
                  <a href="">Safty Tips</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a>FAQ</a>
                </Link>
              </li>
            </div>

            <div className={styles.other_link}>
              <h4>Useful Links</h4>
              <li>
                <Link href="/category">Missing items</Link>
              </li>
              <li>
                <Link href="/category">Found items</Link>
              </li>
            </div>

            <div className={styles.other_link}>
              <h4>Social Links</h4>
              <li>
                <Link href="/">Facebook</Link>
              </li>
              <li>
                <Link href="/">Instagram</Link>
              </li>
              <li>
                <Link href="/">Twitter</Link>
              </li>
            </div>
            <div
              className={`${styles["download_app"]} ${styles["other_link"]}`}
            >
              <h4>Download our app</h4>
              <Image
                className=""
                src="/assets/app-store-google-play-logo.png"
                width={180}
                height={120}
                alt="logo"
              />
            </div>
          </div>
        </div>

        <div className={styles.copywright_section}>
          <p>Findermann &#169; 2021</p>
        </div>
      </footer>
      {/* <!-- end of footer_container --> */}
    </>
  );
};

export default Footer;

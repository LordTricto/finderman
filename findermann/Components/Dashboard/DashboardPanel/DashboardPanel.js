import Link from "next/link";
import styles from "./DashboardPanel.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserEdit,
  faStickyNote,
  faKey,
} from "@fortawesome/free-solid-svg-icons";

const DashboardPanel = () => {
  return (
    <>
      {/* start of user_nav_pane */}
      <div className={styles.user_nav_pane}>
        <div className={styles.user_nav_pane__user_info_section}>
          <div className={styles.user_nav_pane__user_info_section__image}>
            <Image
              layout="responsive"
              src="/assets/user.jpg"
              width={180}
              height={180}
              alt="User"
            />
          </div>
          <p className={styles.user_nav_pane__user_info_section__name}>Sammy</p>
        </div>
        <div className={styles.user_nav_pane__links}>
          <li>
            <Link href="/userDashboard" passHref>
              <div className={styles.user_nav_pane__links_content}>
                <div className={styles.iconDiv}>
                  <FontAwesomeIcon icon={faUser} className={styles.icon} />{" "}
                </div>
                <p> Update Profile </p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/editUploadPage" passHref>
              <div className={styles.user_nav_pane__links_content}>
                <div className={styles.iconDiv}>
                  <FontAwesomeIcon icon={faUserEdit} className={styles.icon} />
                </div>
                <p> Edit Uploads </p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/subscriptionHistory" passHref>
              <div className={styles.user_nav_pane__links_content}>
                <div className={styles.iconDiv}>
                  <FontAwesomeIcon
                    icon={faStickyNote}
                    className={styles.icon}
                  />{" "}
                </div>
                <p> Subscription History </p>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/resetPassword" passHref>
              <div className={styles.user_nav_pane__links_content}>
                <div className={styles.iconDiv}>
                  <FontAwesomeIcon icon={faKey} className={styles.icon} />{" "}
                </div>
                <p> Change Password </p>
              </div>
            </Link>
          </li>
        </div>
      </div>
      {/* end of user_nav_pane */}
    </>
  );
};

export default DashboardPanel;

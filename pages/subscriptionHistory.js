import Link from "next/link";
import styles from "../styles/subscriptionHistory.module.css";
import Field from "../Components/Field/Field";
import Button from "../Components/Buttons/Button";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";
import DashboardTable from "../Components/Dashboard/DashboardTable/DashboardTable";

function subscriptionHistory() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className={styles.post_person_box}>
          <h3 className={styles.heading}>Subscription History</h3>
          <div className={styles.table}>
            <DashboardTable />
          </div>
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default subscriptionHistory;

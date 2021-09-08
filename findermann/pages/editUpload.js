import styles from "../styles/editUpload.module.css";
import Field from "../Components/Field/Field";
import UploadCard from "../Components/UploadCard/UploadCard";
import DashboardPanel from "../Components/Dashboard/DashboardPanel/DashboardPanel";

function editUpload() {
  return (
    <>
      {/* start of container */}
      <div className={styles.container}>
        {/* start of user_nav_pane */}
        <DashboardPanel />
        {/* end of user_nav_pane */}
        <div className={styles.post_person_box}>
          <h3 className={styles.heading}>Edit Uploads</h3>

          <UploadCard />

          <UploadCard />
        </div>
      </div>
      {/* end of container */}
    </>
  );
}

export default editUpload;

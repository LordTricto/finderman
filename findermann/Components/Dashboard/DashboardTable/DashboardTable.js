import styles from "./DashboardTable.module.css";

function DashboardTable() {
  return (
    <>
      <table className={styles.content_table}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Subscription Plan</th>
            {/* <th>Lite</th> */}
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#10344</td>
            <td>Lite</td>
            <td>21/05/2020 - 2/06/2020</td>
            {/* <td>@mdo</td> */}
          </tr>
          <tr>
            <td>#10344</td>
            <td>Lite</td>
            <td>21/05/2020 - 2/06/2020</td>
            {/* <td>@mdo</td> */}
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default DashboardTable;

import { useSelector, useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";
import AppLayout from "../../components/appLayout";
import { AiFillAlert, AiFillCheckCircle } from "react-icons/ai";
import { prospectsMessages} from '../../utils/messages'

function Prospects() {
  const prospects = useSelector((state) => state.prospects);
  const dispatch = useDispatch();

  return (
    <AppLayout className={styles.main}>
      <h1 className={styles.title}>ADDI-CRM Sales Prospects!</h1>

      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Identification</h1>
            </th>
            <th>
              <h1>Name</h1>
            </th>
            <th>
              <h1>Lastname</h1>
            </th>
            <th>
              <h1>Birth Date</h1>
            </th>
            <th>
              <h1>Age</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {prospects ? (
            prospects.map((item) => (
              <tr key={item.identification}>
                <td>{item.identification}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.birthDate}</td>
                <td>{item.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="noLeads">
                <AiFillAlert /> &nbsp; {prospectsMessages.notProspectsFound}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AppLayout>
  );
}

export default Prospects;

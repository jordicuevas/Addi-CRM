import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Home.module.css";
import AppLayout from "../components/appLayout";
import { AiFillAlert, AiFillCheckCircle } from "react-icons/ai";
import { updateLead, validateProspect } from "../store/actions";
import { checkProspects } from "../utils/utils";
import { leadsMessages } from '../utils/messages'

function Leads() {
  const dispatch = useDispatch();
  let leads;
  let leadsArray = useSelector((state) => state.leads);
  let prospects = useSelector((state) => state.prospects);
  if (prospects) {
    leads = checkProspects(leadsArray, prospects);
  } else {
    leads = leadsArray;
  }
  return (
    <AppLayout className={styles.main}>
      <h1 className={styles.title}>ADDI-CRM Sales Leads!</h1>

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
            <th>
              <h1>Verify Lead</h1>
            </th>
            <th>
              <h1>Prospect</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {leads ? (
            leads.map((item) => (
              <tr key={item.identification}>
                <td>{item.identification}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.birthDate}</td>
                <td>{item.age}</td>
                <td>
                  {item.isVerified && item.qualified ? (
                    <AiFillCheckCircle className="green-icon" />
                  ) : (
                    <button
                      className="validate-button"
                      onClick={() =>
                        dispatch(updateLead(item.identification))
                      }
                    >
                      Check Lead info
                    </button>
                  )}
                </td>
                <td>
                  {!item.qualified ? (
                      leadsMessages.notVerified 
                  ) : (
                    <button
                      className="validate-prospect-button"
                      onClick={() =>
                        dispatch(validateProspect(item.identification))
                      }
                    >
                      Validate Prospect
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="noLeads">
                <AiFillAlert /> &nbsp; {leadsMessages.notLeadsFound}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </AppLayout>
  );
}

export default Leads;

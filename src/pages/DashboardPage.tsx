import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Context from "../store/Context";
import Toast from "../components/Toast";

const DashboardPage = () => {
  const [state, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchSessionInfo((_info, err) => {
      if (err) {
        if (err.message.includes("Invalid session")) {
          actions.signOut();
        }
      }
    });
    actions.fetchOrgs((_orgs, err) => {
      if (err) console.error(err);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {state.error && <Toast message={"Error:" + state.error} kind="error" />}
      <Layout />
    </div>
  );
};

export default DashboardPage;

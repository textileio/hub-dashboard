import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Context from "../store/Context";

const DashboardPage = () => {
  const [, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchSessionInfo((_info, err) => {
      if (err) {
        if (err.message.includes("Invalid session")) {
          actions.signOut();
        } else {
          console.error(err);
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
      <Layout />
    </div>
  );
};

export default DashboardPage;

import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import Context from "../store/Context";

const DashboardPage = () => {
  const [, actions] = useContext(Context);

  useEffect(() => {
    actions.fetchSessionInfo((_info, err) => {
      if (err && err.message.includes("Invalid session")) {
        actions.signOut();
      }
    });
    actions.fetchOrgs((_orgs, err) => {
      console.log(_orgs, err);
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

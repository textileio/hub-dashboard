import React, { Component } from "react";
import Layout from "../components/Layout";
import Context from "../store/Context";

class DashboardPage extends Component {
  static contextType = Context;
  // For TS pre-3.7:
  context!: React.ContextType<typeof Context>;
  // For TS 3.7 and above:
  // declare context: React.ContextType<typeof MyContext>;

  componentDidMount() {
    // Fetch data initially
    this.fetchOrgsAndUser();
  }

  fetchOrgsAndUser() {
    const [, actions] = this.context;
    actions.fetchSessionInfo((_info, err) => {
      if (err && err.message.includes("Invalid session")) {
        actions.signOut();
      }
    });
    actions.fetchOrgs((orgs) => {
      console.log(orgs);
    });
  }

  render() {
    return (
      <div>
        <Layout />
      </div>
    );
  }
}

export default DashboardPage;

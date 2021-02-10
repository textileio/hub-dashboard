import React, { Component } from "react";
import Layout from "../components/Layout";
import Context from "../store/Context";

class DashboardPage extends Component {
  static contextType = Context;
  // For TS pre-3.7:
  context!: React.ContextType<typeof Context>;
  // For TS 3.7 and above:
  // declare context: React.ContextType<typeof MyContext>;
  ignoreLastFetch = false;

  componentDidMount() {
    // Fetch data initially
    this.fetchOrgsAndUser();
  }

  // componentDidUpdate(prevProps: any) {
  //   const oldId = prevProps.params.invoiceId;
  //   const newId = this.props.params.invoiceId;
  //   if (newId !== oldId) this.fetchInvoice();
  // }

  componentWillUnmount() {
    // Allows us to ignore an inflight request
    this.ignoreLastFetch = true;
  }

  fetchOrgsAndUser() {
    const [, actions] = this.context;
    actions.fetchOrgs((orgs) => {
      if (!this.ignoreLastFetch) {
        console.log(orgs);
      }
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

import { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "../../store/Context";
import BillingCustomerInfo from "./components/BillingCustomerInfo";
import BillingOverview from "./components/BillingOverview";
import BillingDetailsTable from "./components/BillingDetailsTable";
const BillingPanelContainer = styled.div`
  width: 100%;
`;

const BillingPanel = () => {
  const [state, actions] = useContext(Context);
  const { customer, usage } = state.user.billing;

  useEffect(() => {
    actions.fetchBilling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BillingPanelContainer>
      <h3>Billing Information</h3>
      {customer ? <BillingOverview {...customer} /> : null}
      <h1>Daily usage</h1>
      {customer
        ? customer.dailyUsageMap.map((dailyData: any, i: number) => {
            return <BillingCustomerInfo key={i} {...dailyData[1]} />;
          })
        : null}

      <h4>Daily</h4>
      {customer
        ? customer.dailyUsageMap.map((dailyData: any, i: number) => {
            return <BillingDetailsTable key={i} {...dailyData[1]} />;
          })
        : null}
      <h4>Overall</h4>
      {usage
        ? usage.usageMap.map((usageData: any, i: number) => {
            return <BillingDetailsTable key={i} {...usageData[1]} />;
          })
        : null}
    </BillingPanelContainer>
  );
};

export default BillingPanel;

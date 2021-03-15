import { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "../../store/Context";
import BillingCustomerInfo from "./components/BillingCustomerInfo";
import BillingOverview from "./components/BillingOverview";
import BillingDetailsTable from "./components/BillingDetailsTable";
import { space } from "../../utils";

const BillingPanelContainer = styled.div`
  width: 100%;
`;

const UsageOverview = styled.div`
  display: flex;
  div {
    margin-right: ${space[4]};
    :last-child {
      margin-right: 0;
    }
  }
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
      <h1>Billing Information</h1>
      {customer ? <BillingOverview {...customer} /> : null}
      <h2>Daily usage</h2>
      <UsageOverview>
        {customer
          ? customer.dailyUsageMap.map((dailyData: any, i: number) => {
              return <BillingCustomerInfo key={i} {...dailyData[1]} />;
            })
          : null}
      </UsageOverview>

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

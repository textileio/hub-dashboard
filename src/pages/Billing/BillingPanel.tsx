import { useContext, useEffect } from "react";
import styled from "styled-components";
import Context from "../../store/Context";
import BillingCustomerInfo from "./components/BillingCustomerInfo";
import BillingOverview from "./components/BillingOverview";

const BillingPanelContainer = styled.div`
  width: 100%;
`;

const BillingPanel = () => {
  const [, actions] = useContext(Context);
  // const { customer, usage } = state.user.billing;

  useEffect(() => {
    actions.fetchBilling();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BillingPanelContainer>
      <h1>Billing Information</h1>
      <BillingOverview />
      <BillingCustomerInfo />
    </BillingPanelContainer>
  );
};

export default BillingPanel;

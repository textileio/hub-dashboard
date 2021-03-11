import styled from "styled-components";
import { InvertedDefaultButton } from "../../../components/Buttons";
import {
  space,
  borderRadius,
  primaryFontBold,
  typescale,
} from "../../../utils";
import { CreditCard } from "@styled-icons/heroicons-solid/";

const BillingOverviewContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.primaryLight200};
  border-radius: ${borderRadius.default};
  padding: ${space[3]};
  display: flex;
  justify-content: space-between;
  background-position: 100% 100%;
  background: linear-gradient(
    200deg,
    ${({ theme }) => theme.neutral100} 0%,
    ${({ theme }) => theme.neutral300} 100%
  );
`;

const AccountInfo = styled.div``;
const BalanceInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${primaryFontBold};
  font-size: ${typescale.desktop.medium};
  svg {
    max-width: 20px;
    margin-right: ${space[1]};
  }
`;
const BalanceInfoAmmount = styled.span`
  margin: ${space[2]} 0;
  font-size: ${typescale.desktop.heading1};
`;

const BillingOverview = () => {
  return (
    <BillingOverviewContainer>
      <AccountInfo>
        {/* <h5>Account Type</h5>
        <p>free-quota-only</p>
        <h5>Account Status</h5>
        <p>Active</p> */}
      </AccountInfo>
      <BalanceInfo>
        <span>
          <CreditCard />
          Balance
        </span>
        <BalanceInfoAmmount>501$</BalanceInfoAmmount>
        <InvertedDefaultButton big>Payment Portal</InvertedDefaultButton>
      </BalanceInfo>
    </BillingOverviewContainer>
  );
};

export default BillingOverview;

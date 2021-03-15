import styled from "styled-components";
import { InvertedDefaultButton } from "../../../components/Buttons";
import {
  space,
  borderRadius,
  primaryFontBold,
  typescale,
} from "../../../utils";
import { CreditCard } from "@styled-icons/heroicons-solid/";
import Moment from "react-moment";

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

interface BillingOverviewProps {
  accountStatus: string;
  subscriptionStatus: string;
  balance: number;
  invoicePeriod: { unixEnd: number; unixStart: number };
}

const BillingOverview = ({
  accountStatus,
  invoicePeriod,
  subscriptionStatus,
  balance,
}: BillingOverviewProps) => {
  return (
    <BillingOverviewContainer>
      <AccountInfo>
        <p>Account Type: {accountStatus}</p>
        <p>Account Status: {subscriptionStatus}</p>
      </AccountInfo>
      <BalanceInfo>
        <span>
          <CreditCard />
          Balance
        </span>
        <BalanceInfoAmmount>{balance}$</BalanceInfoAmmount>
        <InvertedDefaultButton big>Payment Portal</InvertedDefaultButton>
        <span>start</span>
        <Moment unix format="YYYY/MM/DD">
          {invoicePeriod.unixStart}
        </Moment>
        <span>end:</span>
        <Moment unix format="YYYY/MM/DD">
          {invoicePeriod.unixEnd}
        </Moment>
      </BalanceInfo>
    </BillingOverviewContainer>
  );
};

export default BillingOverview;

import styled from "styled-components";
import Moment from "react-moment";
import {
  space,
  borderRadius,
  primaryFontBold,
  typescale,
} from "../../../utils";
import {
  Calculator,
  Gift,
  CreditCard,
  Calendar,
} from "@styled-icons/heroicons-outline/";

const BillingCustomerInfoConatiner = styled.div`
  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.neutral300};
    padding-bottom: ${space[4]};
    margin-bottom: ${space[3]};
  }
`;

const BillingCustomerItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${space[3]};
  margin: ${space[3]};
  border: 2px solid ${({ theme }) => theme.neutral300};
  border-radius: ${borderRadius.default};
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  svg {
    color: ${({ theme }) => theme.neutral100};
    border-radius: ${borderRadius.default};
    background-color: ${({ theme }) => theme.neutral1000};
    padding: 4px;
    max-width: 25px;
    margin-bottom: ${space[2]};
  }
`;

const CustomerDetails = styled.div`
  display: flex;
`;

const BillingCustomerItemName = styled.span`
  font-family: ${primaryFontBold};
  color: ${({ theme }) => theme.neutral700};
`;
const BillingCustomerItemValue = styled.span`
  font-size: ${typescale.desktop.heading4};
  color: ${({ theme }) => theme.primary};
  small {
    font-size: ${typescale.desktop.big};
    color: ${({ theme }) => theme.neutral700};
    margin-left: ${space[1]};
  }
`;

interface BillingCustomerInfoProps {
  description: string;
  units: number;
  total: number;
  free: number;
  grace: number;
  cost: number;
  period: { unixEnd: number; unixStart: number };
}

const BillingCustomerInfo = ({
  description,
  units,
  total,
  free,
  grace,
  cost,
  period,
}: BillingCustomerInfoProps) => {
  return (
    <BillingCustomerInfoConatiner>
      <h4>{description}</h4>

      <CustomerDetails>
        <BillingCustomerItem>
          <Calculator />
          <BillingCustomerItemName>Usage</BillingCustomerItemName>
          <BillingCustomerItemValue>
            {free}
            <small>GiB</small>
          </BillingCustomerItemValue>
        </BillingCustomerItem>

        <BillingCustomerItem>
          <Gift />
          <BillingCustomerItemName>Free Quota</BillingCustomerItemName>
          <BillingCustomerItemValue>
            {grace}
            <small>98%</small>
          </BillingCustomerItemValue>
        </BillingCustomerItem>

        <BillingCustomerItem>
          <CreditCard />
          <BillingCustomerItemName>Daily Cost</BillingCustomerItemName>
          <BillingCustomerItemValue>
            {cost}
            <small>$</small>
          </BillingCustomerItemValue>
        </BillingCustomerItem>

        <BillingCustomerItem>
          <Calendar />
          <BillingCustomerItemName>Quota Ends</BillingCustomerItemName>
          <BillingCustomerItemValue>
            <Moment unix format="YYYY/MM/DD">
              {period.unixStart}
            </Moment>

            <small>2021</small>
          </BillingCustomerItemValue>
        </BillingCustomerItem>
      </CustomerDetails>
    </BillingCustomerInfoConatiner>
  );
};

export default BillingCustomerInfo;

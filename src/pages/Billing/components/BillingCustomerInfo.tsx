import styled from "styled-components";
import Moment from "react-moment";
import {
  space,
  borderRadius,
  primaryFontBold,
  typescale,
} from "../../../utils";
import { Card } from "../../../components";
import { InformationCircle } from "@styled-icons/heroicons-outline/";

const BillingCustomerInfoContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
  h5 {
    margin: ${space[2]} 0;
    max-width: 50%;
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

const BillingCustomerItemName = styled.span`
  font-family: ${primaryFontBold};
  color: ${({ theme }) => theme.neutral700};
`;
const BillingCustomerItemValue = styled.span`
  font-size: ${typescale.desktop.heading5};
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
    <BillingCustomerInfoContainer>
      <InformationCircle />
      <h5>{description}</h5>
      <BillingCustomerItemName>Usage</BillingCustomerItemName>
      <BillingCustomerItemValue>{free}</BillingCustomerItemValue>
      <BillingCustomerItemName>Free Quota</BillingCustomerItemName>
      <BillingCustomerItemValue>
        {grace}
        <small>98%</small>
      </BillingCustomerItemValue>
      <BillingCustomerItemName>Daily Cost</BillingCustomerItemName>
      <BillingCustomerItemValue>
        {cost}
        <small>$</small>
      </BillingCustomerItemValue>
      <BillingCustomerItemName>Quota Ends</BillingCustomerItemName>
      <BillingCustomerItemValue>
        <Moment unix format="YYYY/MM/DD">
          {period.unixStart}
        </Moment>
      </BillingCustomerItemValue>
    </BillingCustomerInfoContainer>
  );
};

export default BillingCustomerInfo;

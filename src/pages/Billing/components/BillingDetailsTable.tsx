import styled from "styled-components";

const BillingDetailsTableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    min-width: 12.5%;
    padding: 10px;
    border: 1px solid gray;
  }
`;

interface BillingDetailsTableProps {
  description: string;
  units: number;
  total: number;
  free: number;
  grace: number;
  cost: number;
  period: { unixEnd: number; unixStart: number };
}

const BillingDetailsTable = ({
  description,
  units,
  total,
  free,
  grace,
  cost,
  period,
}: BillingDetailsTableProps) => {
  return (
    <BillingDetailsTableContainer>
      <div>{description}</div>
      <div>
        Units:
        <br /> {units}
      </div>
      <div>
        total:
        <br /> {total}
      </div>
      <div>
        free:
        <br />
        {free}
      </div>
      <div>
        grace:
        <br />
        {grace}
      </div>
      <div>
        cost:
        <br />
        {cost}
      </div>
      <div>
        start:
        <br />
        {period.unixStart}
      </div>
      <div>
        end:
        <br />
        {period.unixEnd}
      </div>
    </BillingDetailsTableContainer>
  );
};

export default BillingDetailsTable;
